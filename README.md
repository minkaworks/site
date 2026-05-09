# Minka Works Landing

Next.js landing page for Minka Works.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

This repository is deployed from its own root.

If you connect it to Vercel, keep **Root Directory** unset or point it to the repository root.

The repo also includes `vercel.json` to make the Next.js build explicit for Vercel deployments.

## Contact Form

The contact form posts to a Google Apps Script web app URL stored in `APPS_SCRIPT_WEB_APP_URL`.

We manage secrets with Doppler, so set that value there instead of committing a local `.env` file.

Set it in Doppler before deploying:

```bash
APPS_SCRIPT_WEB_APP_URL=https://script.google.com/macros/s/...
```

Example Apps Script handler:

The prepared script lives in `google-apps-script/Code.gs` and includes the manifest in `google-apps-script/appsscript.json`.

```javascript
function doPost(e) {
  const payload = JSON.parse(e.postData.contents)

  const spreadsheet = SpreadsheetApp.openById('PASTE_YOUR_SPREADSHEET_ID_HERE')
  const sheet = spreadsheet.getSheetByName('Leads') || spreadsheet.insertSheet('Leads')

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email', 'Message'])
  }

  sheet.appendRow([new Date(), payload.name, payload.company || '', payload.email, payload.message])

  return ContentService.createTextOutput(JSON.stringify({ ok: true, sheet: sheet.getName() }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

Deploy the script as a web app and allow the endpoint to be called from your server.

Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with the ID from your Google Sheet URL.

Make sure the Apps Script project manifest includes the `https://www.googleapis.com/auth/spreadsheets` scope.
