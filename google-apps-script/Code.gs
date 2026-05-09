function doPost(e) {
  try {
    const payload = parsePayload_(e)
    validatePayload_(payload)

    const [givenName, ...rest] = String(payload.name).trim().split(/\s+/)
    const familyName = rest.join(' ') || 'Lead'
    const contact = ContactsApp.createContact(givenName || 'Lead', familyName, String(payload.email).trim())

    const notes = [payload.company, payload.message]
      .map(function (value) {
        return String(value || '').trim()
      })
      .filter(Boolean)
      .join('\n\n')

    if (notes) {
      contact.setNotes(notes)
    }

    return jsonResponse_({
      ok: true,
      name: contact.getFullName(),
      email: String(payload.email).trim(),
    })
  } catch (error) {
    console.error(error)
    return jsonResponse_({ ok: false, error: String(error && error.message ? error.message : error) })
  }
}

function doGet() {
  return jsonResponse_({ ok: true, status: 'ready' })
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing request body')
  }

  const contents = String(e.postData.contents).trim()

  if (!contents) {
    throw new Error('Empty request body')
  }

  if (contents.charAt(0) === '{') {
    return JSON.parse(contents)
  }

  return e.parameter || {}
}

function validatePayload_(payload) {
  if (!payload || !String(payload.name || '').trim()) {
    throw new Error('Missing name')
  }

  if (!String(payload.email || '').trim()) {
    throw new Error('Missing email')
  }

  if (!String(payload.message || '').trim()) {
    throw new Error('Missing message')
  }
}

function jsonResponse_(payload) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
  output.setMimeType(ContentService.MimeType.JSON)

  return output
}
