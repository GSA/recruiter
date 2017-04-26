# recruiter [WIP]
Embeddable forms for recruiting usability research participants. Uses a custom Google Apps Script to send submissions to a Google Sheet, deployed via Google Tag Manager.

## Components
 - [Google Sheets Template](https://docs.google.com/a/gsa.gov/spreadsheets/d/14vquDC_hCroparaee6dcYzMfR-VAPUeZskLwS3IBhpU/edit?usp=sharing) - make a copy
 - Google Apps Script (included in Sheets template)
 - [Google Tag Manager](https://tagmanager.google.com) - account required 
 - Google Analytics (session metadata) 
 - [U.S. Web Design Standards](https://standards.usa.gov/) styles and [form patterns guidance](https://standards.usa.gov/components/form-templates/) for accessibility.
 
 
## Deploying

#### [Google Spreadsheet template](https://docs.google.com/a/gsa.gov/spreadsheets/d/14vquDC_hCroparaee6dcYzMfR-VAPUeZskLwS3IBhpU/edit?usp=sharing) 
 1. Make a copy of the Spreadsheet template (contains gScript for processing submissions)
 2. Publish > Deploy as web app
    * enter Project Version name and click 'Save New Version'
    * set security level and enable service (most likely execute as 'me' and access 'anyone, even anonymously)
 
 4. From the `Settings` tab in the Spreadsheet, copy 'WebAppURL' and replace the `gSheetsAppURL` custom variable in Google Tag Manager. (TODO: can this be read from the sheet by GTM? Could a custom UI button push this to GTM, where the container ID is added to the `Settings` tab on the sheet?)
 5. Insert column names on your destination sheet matching the parameter names of the data you are passing in (exactly matching case)
 Default fields captured in this configuration
 
 | Field name | Type | Description |
 | ---------- | ---- | ----------- |
 | Date | Timestamp | submission time and date |
 | Name | String | First and Last name |
 | Email | String | Email address |
 | UserAgent | String | OS + Version, Browser + version |
 | TODO: PageURL | String | URI of page where form was submitted |
 | TODO: Referrer | String | Referring page (how user arrived at PageURL |
 
 6. TODO: how to customize capture fields. 
 **Note: PIA, PRA or other compliance issues may be triggered for any customized capture fields. Consult Chief Privacy Officer and/or PRA Desk Officer before deploying any customized form versions.**


### Google Tag Manager
1. If needed, [create a Tag Manager](https://tagmanager.google.com) account.
2. Create a new Tag Manager Container (if GTM is already in use on the site, skip to Step 2).
3. Upload [recruiter-config.json]() (TODO: upload container configuration) to a GTM container.
4. Customize these variables(?) (TODO: script URL? test if sharing extant app works when someone else tries to deploy) 
5. Test GTM config correctly loads recruiter locally (TODO: how to do local testing for GTM)
6. Publish GTM container. **Reminder: this is equivalent to pushing code to production and should follow any QA + testing standards.**


## Roadmap
Recruiter is the first part of a larger WIP feedback platform implemented via Google Tag Manager.
