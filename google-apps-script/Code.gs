function doPost(e) {
  try {
    const payload = parsePayload_(e)
    validatePayload_(payload)

    const sheet = getLeadsSheet_()
    sheet.appendRow([
      new Date(),
      String(payload.name).trim(),
      String(payload.company || '').trim(),
      String(payload.email).trim(),
      String(payload.message).trim(),
    ])

    return jsonResponse_({
      ok: true,
      sheet: sheet.getName(),
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

function getLeadsSheet_() {
  const spreadsheetId = 'PASTE_YOUR_SPREADSHEET_ID_HERE'
  const sheetName = 'Leads'

  if (spreadsheetId === 'PASTE_YOUR_SPREADSHEET_ID_HERE') {
    throw new Error('Missing spreadsheet ID')
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId)
  let sheet = spreadsheet.getSheetByName(sheetName)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName)
    sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email', 'Message'])
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email', 'Message'])
  }

  return sheet
}

function jsonResponse_(payload) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
  output.setMimeType(ContentService.MimeType.JSON)

  return output
}
