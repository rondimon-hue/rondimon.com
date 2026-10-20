// Receives /design/pkn-community-survey submissions and appends one row per response.
// Paste into the response sheet's Extensions > Apps Script, then
// Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
// The web app URL goes into FORM_ENDPOINT in src/pages/design/pkn-community-survey.astro.

const FIELDS = [
  'q1_attendance', 'q2_heard', 'q2_heard_other', 'q3_programs', 'q3_programs_other',
  'q4_location', 'q5_belonging', 'q6_connections', 'q7_welcome', 'q8_engaged',
  'q9_honest', 'q10_difference', 'q11_respect', 'q12_open', 'q13_trust',
  'q14_action', 'q14_action_detail', 'q15_orgaware', 'q16_voice', 'q17_priorities',
  'q17_priorities_other', 'q18_issue', 'q19_incubator', 'q20_belonging_open', 'q21_other',
];

function doPost(e) {
  const p = e.parameters;
  // honeypot field: bots fill it, people never see it
  if ((p._gotcha || []).join('')) return json({ result: 'ok' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(['submitted_at'].concat(FIELDS));
    // checkboxes arrive as several values; join them into one cell
    sheet.appendRow([new Date()].concat(FIELDS.map(f => plain((p[f] || []).join(', ')))));
  } finally {
    lock.releaseLock();
  }
  return json({ result: 'ok' });
}

// keep answers like "=..." from being read as spreadsheet formulas
function plain(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
