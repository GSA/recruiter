# recruiter [WIP]
Embeddable forms for recruiting usability research participants. Uses Google Tag Manager for targeting and custom Google Apps Script to send submissions to a Google Sheet.

## Components
 - [Google Sheets Template](https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy)
 - [Google Tag Manager](https://tagmanager.google.com) - account required 
 - [Google Apps Script](https://script.google.com/a/gsa.gov/d/1CSUCE9JHkMOutafCJxw3NTQ-J3n3PZlF0Z9UEJae9KxIlcq_AkWTXsEa/edit?usp=sharing) (must be added to sheet)
 - [U.S. Web Design Standards](https://standards.usa.gov/) styles and [form patterns guidance](https://standards.usa.gov/components/form-templates/) for accessibility.
 
 **Optional**
 - Google Analytics (session metadata) 
 
 
## Deploying 

#### Google Spreadsheet template
 1. Make a copy of the [Spreadsheet template](https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy) (contains gScript for processing submissions)
 2. Publish > Deploy as web app
 
    a. enter Project Version name and click 'Save New Version'
    
    b. set security level and enable service (most likely execute as 'me' and access 'anyone, even anonymously)
    
 4. From the `Settings` tab in the Spreadsheet, copy `WebAppURL` and replace the `WebAppURL` custom variable in Google Tag Manager. 
 (TODO: can this be read from the sheet by GTM? Could a custom UI button push this to GTM, where the container ID is added to the `Settings` tab on the sheet?)

##### Default fields provided in this configuration:
 
 | Field name | Type | Description |
 | ---------- | ---- | ----------- |
 | Date | Timestamp | submission time and date |
 | Name | String | First and Last name |
 | Email | String | Email address |
 | UserAgent | String | OS + Version, Browser + version |
 | URL | String | URI of page where form was submitted |
 | Referrer | String | Referring page (how user arrived at PageURL |
 
 6. TODO: how to customize capture fields. 
 **Note: PIA, [PRA](https://www.usability.gov/how-to-and-tools/guidance/pra-overview.html) or other compliance issues may be triggered for any customized capture fields. Consult Chief Privacy Officer and/or PRA Desk Officer before deploying any customized form versions.**


### Google Tag Manager
1. If needed, [create a Tag Manager](https://tagmanager.google.com) account.
2. Create a new Tag Manager Container (if GTM is already in use on the site, skip to Step 2).
3. Upload [gtm-recruiter-to-gsheet.json](https://github.com/laurenancona/recruiter/blob/master/gtm-recruiter-to-sheet.json) (TODO: TEST) to a GTM container.
4. Customize these variables(?) (TODO: script URL? test if sharing extant app works when someone else tries to deploy) 
5. Install (or have agency install) the Tag Manager snippet code in the site template.
6. Create any specialized `Triggers` in Tag Manager, e.g. "Only show recruiter on pages in /directory", etc.
5. Test GTM config correctly loads recruiter locally (see [Preview and Debug containers](https://support.google.com/tagmanager/answer/6107056?visit_id=1-636286168306770023-1579186406&rd=1))
6. Publish GTM container. **Reminder: this is equivalent to pushing code to production and should follow any QA + testing standards.**


## Roadmap
Recruiter is the first part of a larger WIP feedback platform implemented via Google Tag Manager.
