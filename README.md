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
  const [givenName, ...rest] = String(payload.name || '').trim().split(/\s+/)
  const familyName = rest.join(' ')

  const response = UrlFetchApp.fetch('https://people.googleapis.com/v1/people:createContact?personFields=names,emailAddresses', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
    },
    payload: JSON.stringify({
      names: [{ givenName: givenName || 'Lead', familyName: familyName || 'Lead' }],
      emailAddresses: [{ value: payload.email || '' }],
    }),
  })

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

Deploy the script as a web app and allow the endpoint to be called from your server.

The script uses the Google People API directly so it does not depend on `ContactsApp`.

Make sure the Apps Script project has the People API enabled in Google Cloud and that the manifest includes the `https://www.googleapis.com/auth/script.external_request` and `https://www.googleapis.com/auth/contacts` scopes.
