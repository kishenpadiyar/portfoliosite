# Google Apps Script Setup Instructions

This guide will help you set up Google Apps Script to handle contact form submissions and send email notifications.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. Set up column headers in row 1:
   - **Column A**: Timestamp
   - **Column B**: Name
   - **Column C**: Email
   - **Column D**: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any default code and paste the following script:

```javascript
// Configuration
const SHEET_NAME = "Sheet1"; // Change if your sheet has a different name
const RECIPIENT_EMAIL = "kishankpadiyar@gmail.com";
const SECURITY_TOKEN = ""; // Optional: Set a security token here

// Test function - returns a message when accessed via browser (GET request)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      success: true, 
      message: "Google Apps Script is working! Use POST to submit contact form data.",
      status: "Script is deployed and accessible"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Main function - handles form submissions (POST request)
function doPost(e) {
  try {
    // Log that we received a request (for debugging)
    console.log("Received POST request");
    
    // Check if postData exists
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "No data received" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse incoming JSON data
    let postData;
    try {
      postData = JSON.parse(e.postData.contents);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Invalid JSON data: " + parseError.toString() })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Optional: Validate security token
    if (SECURITY_TOKEN && postData.token !== SECURITY_TOKEN) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Extract form data
    const name = postData.name || "";
    const email = postData.email || "";
    const message = postData.message || "";
    const timestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    
    // Validate required fields
    if (!name || !email || !message) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Missing required fields" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Spreadsheet not found" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Sheet '" + SHEET_NAME + "' not found" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append data to the sheet
    sheet.appendRow([timestamp, name, email, message]);
    
    // Send email notification
    try {
      const subject = `New Contact Form Submission - ${name}`;
      const emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>This email was sent automatically from your portfolio contact form.</small></p>
      `;
      
      MailApp.sendEmail({
        to: RECIPIENT_EMAIL,
        subject: subject,
        htmlBody: emailBody
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Email send error:", emailError);
      // Continue - data was saved to sheet
    }
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Form submitted successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error and return error response
    console.error("Error processing form submission:", error);
    const errorMessage = error.toString();
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: errorMessage })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (or press Ctrl+S / Cmd+S)
4. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy → New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Contact Form Handler v1" (or any description)
   - **Execute as**: **Me** (your Google account) - **This is required for MailApp to work**
   - **Who has access**: **Anyone** (or "Anyone with Google account" for more security)
4. Click **Deploy**
5. **Authorize the script** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)" if you see a warning
   - Click "Allow" to grant permissions
6. **Copy the Web App URL** - This is your `GOOGLE_APPS_SCRIPT_URL`

## Step 4: Set Up Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your deployed web app URL.

### Optional: Add Security Token

1. In your Google Apps Script, set a value for `SECURITY_TOKEN`:
   ```javascript
   const SECURITY_TOKEN = "your-secret-token-here";
   ```

2. In your `.env.local` file, add:
   ```env
   GOOGLE_APPS_SCRIPT_TOKEN=your-secret-token-here
   ```

3. Make sure both values match!

## Step 5: Test the Integration

### Test 1: Test Google Apps Script Directly (GET request)
1. Open your Google Apps Script web app URL in a browser
2. You should see a JSON response like:
   ```json
   {
     "success": true,
     "message": "Google Apps Script is working! Use POST to submit contact form data.",
     "status": "Script is deployed and accessible"
   }
   ```
3. If you see this, your script is deployed correctly!

### Test 2: Test the Contact Form
1. Start your Next.js development server: `npm run dev`
2. Navigate to the contact page: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check:
   - Data appears in your Google Sheet
   - Email is received at kishankpadiyar@gmail.com
   - Success message appears on the form

## Troubleshooting

### Email not being sent
- Make sure the script is deployed with "Execute as: Me"
- Check that MailApp permissions were granted
- Verify the recipient email is correct

### Form submission fails
- Check that the Web App URL is correct in `.env.local`
- Verify the Google Sheet has the correct column headers
- Check the Apps Script execution logs (View → Executions)

### Security token not working
- Make sure the token matches exactly in both places
- Check for extra spaces or characters
- Redeploy the script after changing the token

## Notes

- The script will append a new row each time the form is submitted
- Emails are sent immediately when the form is submitted
- The timestamp is in the format: MM/DD/YYYY, HH:MM:SS
- You can modify the email template in the script as needed
- To update the script, make changes and click "Deploy → Manage deployments" → "Edit" (pencil icon) → "New version"

## Security Considerations

- The security token is optional but recommended for production
- Consider limiting access to "Anyone with Google account" for better security
- Regularly review the Google Sheet for spam submissions
- Consider adding CAPTCHA in the future for additional protection

