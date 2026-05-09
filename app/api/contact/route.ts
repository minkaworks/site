export async function POST(request: Request) {
  const formData = await request.formData()
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Placeholder: connect this to Resend, Google Sheets, Airtable, or a CRM later.
  return Response.json({ ok: true })
}
