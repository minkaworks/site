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
  const contact = ContactsApp.createContact(givenName || 'Lead', familyName || '', payload.email || '')

  const notes = [payload.company, payload.message].filter(Boolean).join('\n\n')

  if (notes) {
    contact.setNotes(notes)
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

Deploy the script as a web app and allow the endpoint to be called from your server.

Note: `ContactsApp` is deprecated by Google, but it is the shortest path if you want a quick working integration. If you want, I can switch this repo to a more future-proof People API version inside Apps Script.
