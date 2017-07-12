//
// IMPORTANT:
// This script is designed to receive submissions from forms deployed via Google Tag Manager (GTM):
// https://github.com/GSA/recruiter
//
// Script intended to be bound to a Google Sheet set up like this template:
// https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy
//
// Adapted from script by Margarita Evtimova | https://twitter.com/maggieto
// http://www.ganotes.com/pass-dynamic-data-to-google-sheets-using-google-tag-manager/
//
// ================================ USAGE =================================== //
//
// 1. Publish > Deploy as web app
//    - enter Project Version name and click 'Save New Version'
//    - set security level and enable service (most likely execute as 'me' and access 'anyone at GSA')
//
// 2. From the Settings tab, value of 'WebAppURL' (auto-populated by this script) should
//    match the Custom Variable of the same name in Google Tag Manager.
//
// 3. Column names in the destination Spreadsheet should exactly match
//    parameter names of the data you are passing in (case-sensitive)

// ============================= BEGIN SCRIPT =============================== //

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

var ss = SpreadsheetApp.getActiveSpreadsheet(); // find current sheet
var sheet = ss.getSheets()[0].getSheetName();  // find name of first tab in that sheet

var SHEET_NAME = sheet;
var SHEET_KEY = SpreadsheetApp.getActiveSpreadsheet().getId(); // find key (unique ID) of current sheet

// doGet is required here because GTM uses GET requests for Custom Image tags
 function doGet(e){
   return handleResponse(e);
 }

 function doPost(e){
   return handleResponse(e);
 }

function handleResponse(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(30000); // wait 30 seconds before conceding defeat

  try {
  // next set where we write the data - can also write to multiple/alternate destinations
  var doc = SpreadsheetApp.openById(SHEET_KEY);
  var sheet = doc.getSheetByName(SHEET_NAME);

  // assume header is in row 1 but you can override with header_row in GET/POST data
  var headRow = e.parameter.header_row || 1;
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var nextRow = sheet.getLastRow()+1; // get next row
  var row = [];
  // loop through the header columns
  for (i in headers){
    if (headers[i] == "Timestamp"){ // special case if you include a 'Timestamp' column
      row.push(new Date());
    } else { // else use header name to get data
      row.push(e.parameter[headers[i]]);
    }
  }
  // more efficient to set values as [][] array than individually
  sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  // return json success results
  return ContentService
  .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
  .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
    .createTextOutput(JSON.stringify({"result":"error", "error": e}))
    .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}

// ========================== UTILITY FUNCTIONS ============================= //

// Get id of active spreadsheet
// https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetId
function getId() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getId();
  return sheet;
}

// Get name of first tab (aka "sheet") in active spreadsheet
// https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getsheetname
function getSheetName() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0].getSheetName();
  return sheet;
}

// Get web app id of currently-published version of this script
// https://developers.google.com/apps-script/reference/script/service#getUrl
function getWebAppId() {
  var url = ScriptApp.getService().getUrl()
  return url;
}

// Get URL of currently active spreadsheet
// https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#geturl
function getSpreadsheetUrl() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  return ss;
}
