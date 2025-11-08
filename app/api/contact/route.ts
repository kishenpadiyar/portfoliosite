import { NextRequest, NextResponse } from "next/server";

// Rate limiting - simple in-memory store (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

function validateInput(name: string, email: string, message: string): string | null {
  // Basic validation
  if (!name || name.trim().length === 0 || name.length > 100) {
    return "Name is required and must be less than 100 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 255) {
    return "Valid email is required";
  }

  if (!message || message.trim().length === 0 || message.length > 5000) {
    return "Message is required and must be less than 5000 characters";
  }

  return null;
}

function sanitizeInput(input: string): string {
  // Remove potentially dangerous characters and trim
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < and > to prevent HTML injection
    .substring(0, 5000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    const validationError = validateInput(name, email, message);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Get Google Apps Script URL from environment variable
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json(
        { error: "Server configuration error. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Optional security token
    const securityToken = process.env.GOOGLE_APPS_SCRIPT_TOKEN;

    // Prepare data to send to Google Apps Script
    const payload = {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      ...(securityToken && { token: securityToken }),
    };

    console.log("Sending request to Google Apps Script:", scriptUrl);
    console.log("Payload:", { name: sanitizedName, email: sanitizedEmail, messageLength: sanitizedMessage.length });

    // Forward request to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Get response text
    const responseText = await response.text();
    
    // Log the response for debugging
    console.log("Google Apps Script response status:", response.status);
    console.log("Google Apps Script response (first 1000 chars):", responseText.substring(0, 1000));

    // Check if response is HTML (error page from Google)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html") || responseText.trim().startsWith("<!doctype")) {
      console.error("Google Apps Script returned HTML instead of JSON");
      return NextResponse.json(
        { 
          error: "Server error. The Google Apps Script may need to be authorized or there was an execution error.",
          details: "Google Apps Script returned an HTML error page. Check script execution logs in Google Apps Script."
        },
        { status: 500 }
      );
    }

    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      // If not JSON, it's likely an error
      console.error("Failed to parse response as JSON. Response:", responseText);
      return NextResponse.json(
        { 
          error: "Server error. Unexpected response format from Google Apps Script.",
          details: `Could not parse response as JSON. Status: ${response.status}. Response: ${responseText.substring(0, 200)}`
        },
        { status: 500 }
      );
    }

    // Check if the script returned an error
    if (!response.ok) {
      console.error("Google Apps Script HTTP error:", response.status, result);
      return NextResponse.json(
        { 
          error: result.error || `Server error (HTTP ${response.status})`,
          details: result.error || `HTTP ${response.status} error from Google Apps Script`
        },
        { status: response.status }
      );
    }

    // Check if result indicates failure
    if (result.success === false || (result.success !== true && result.error)) {
      console.error("Google Apps Script returned error:", result);
      return NextResponse.json(
        { 
          error: result.error || "Failed to submit form. Please try again later.",
          details: result.error || "Error from Google Apps Script"
        },
        { status: 500 }
      );
    }

    // Success!
    console.log("Form submitted successfully:", result);
    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been sent successfully!" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        error: "An error occurred. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
