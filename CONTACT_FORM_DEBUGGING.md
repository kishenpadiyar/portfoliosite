# Contact Form Debugging Guide

If you're getting "Failed to submit form" errors, follow these steps to debug:

## Step 1: Check Server Logs

1. Look at your terminal where `npm run dev` is running
2. When you submit the form, you should see logs like:
   - "Google Apps Script response status: [status code]"
   - "Google Apps Script response: [response text]"

## Step 2: Common Issues and Solutions

### Issue 1: Google Apps Script Not Deployed
**Symptoms:** HTTP 404 or "Script not found" error

**Solution:**
1. Go to your Google Apps Script project
2. Click "Deploy → Manage deployments"
3. Make sure you have a deployment
4. Copy the correct Web App URL
5. Update `.env.local` with the correct URL
6. Restart your Next.js server

### Issue 2: Script Not Authorized
**Symptoms:** HTTP 401 or authorization errors

**Solution:**
1. Go to your Google Apps Script project
2. Click "Deploy → Test deployments"
3. Authorize the script when prompted
4. Make sure "Execute as: Me" is selected
5. Redeploy if needed

### Issue 3: Script Returning HTML Instead of JSON
**Symptoms:** "Response was not valid JSON" error

**Solution:**
1. Check your Google Apps Script code
2. Make sure `doPost` function returns:
   ```javascript
   return ContentService.createTextOutput(
     JSON.stringify({ success: true, message: "..." })
   ).setMimeType(ContentService.MimeType.JSON);
   ```
3. Test the script directly in the browser by visiting the URL

### Issue 4: CORS Errors
**Symptoms:** CORS errors in browser console

**Solution:**
1. Google Apps Script web apps should handle CORS automatically
2. Make sure "Who has access" is set to "Anyone" or "Anyone with Google account"
3. Try redeploying the script

### Issue 5: Script Errors
**Symptoms:** Script execution errors

**Solution:**
1. Go to Google Apps Script
2. Click "View → Executions"
3. Check for error messages
4. Fix any errors in your script
5. Redeploy

## Step 3: Test Google Apps Script Directly

Test your Google Apps Script URL directly in a browser or with curl:

```bash
curl -X POST "YOUR_GOOGLE_APPS_SCRIPT_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

Or test in browser:
1. Open your Google Apps Script URL in a new tab
2. You should see a JSON response (might show an error, but that's okay for testing)

## Step 4: Verify Environment Variable

1. Make sure `.env.local` exists in your project root
2. Check that `GOOGLE_APPS_SCRIPT_URL` is set correctly
3. Restart your Next.js server after changing `.env.local`

## Step 5: Check Google Apps Script Code

Make sure your script:
1. Has a `doPost` function (not `doGet`)
2. Returns JSON with `ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON)`
3. Handles errors properly
4. Has the correct sheet name
5. Has the correct recipient email

## Step 6: Check Browser Console

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. Look for any JavaScript errors
5. Check Network tab to see the API request/response

## Quick Test Checklist

- [ ] Google Apps Script is deployed
- [ ] Web App URL is correct in `.env.local`
- [ ] Script is authorized (Execute as: Me)
- [ ] Script has proper permissions (Who has access: Anyone)
- [ ] Next.js server has been restarted after changing `.env.local`
- [ ] Google Sheet exists and has correct column headers
- [ ] Script code is correct (see GOOGLE_APPS_SCRIPT_SETUP.md)
- [ ] No errors in Google Apps Script execution logs

## Still Having Issues?

1. Check the terminal/console logs for detailed error messages
2. Verify your Google Apps Script is working by testing it directly
3. Make sure all steps in GOOGLE_APPS_SCRIPT_SETUP.md were followed correctly
4. Try redeploying your Google Apps Script
5. Check that the script has the latest version deployed

