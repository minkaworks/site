function doPost(e) {
  try {
    const payload = parsePayload_(e)
    validatePayload_(payload)

    const [givenName, ...rest] = String(payload.name).trim().split(/\s+/)
    const familyName = rest.join(' ') || 'Lead'

    const createdContact = createContact_(
      givenName || 'Lead',
      familyName,
      String(payload.email).trim(),
    )

    const notes = [payload.company, payload.message]
      .map(function (value) {
        return String(value || '').trim()
      })
      .filter(Boolean)
      .join('\n\n')

    // Notes are intentionally included in the display name payload only if the
    // People API accepts them as part of the contact creation payload.

    return jsonResponse_({
      ok: true,
      name: createdContact.names && createdContact.names[0] ? createdContact.names[0].displayName : String(payload.name).trim(),
      email: String(payload.email).trim(),
      notes,
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

function createContact_(givenName, familyName, email) {
  const response = UrlFetchApp.fetch(
    'https://people.googleapis.com/v1/people:createContact?personFields=names,emailAddresses',
    {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
      },
      payload: JSON.stringify({
        names: [
          {
            givenName: givenName,
            familyName: familyName,
          },
        ],
        emailAddresses: [
          {
            value: email,
          },
        ],
      }),
      muteHttpExceptions: true,
    },
  )

  const body = response.getContentText()
  let json = {}

  if (body) {
    try {
      json = JSON.parse(body)
    } catch (parseError) {
      throw new Error(body)
    }
  }

  if (response.getResponseCode() >= 400) {
    throw new Error(json.error && json.error.message ? json.error.message : body || 'Failed to create contact')
  }

  return json
}

function jsonResponse_(payload) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
  output.setMimeType(ContentService.MimeType.JSON)

  return output
}
