export async function POST(request: Request) {
  const formData = await request.formData()
  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const appsScriptUrl = process.env.APPS_SCRIPT_WEB_APP_URL

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!appsScriptUrl) {
    return Response.json({ error: 'Apps Script endpoint not configured' }, { status: 500 })
  }

  const response = await fetch(appsScriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, company, email, message }),
  })

  const data = (await response.json().catch(() => null)) as { ok?: boolean } | null

  if (!response.ok || !data?.ok) {
    return Response.json({ error: 'Could not send the message' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
