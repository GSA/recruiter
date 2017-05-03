# recruiter [WIP]
Embeddable forms for recruiting usability research participants. Uses Google Tag Manager to load form UI and targeting, and a custom Google Apps Script to send submissions to a Google Sheet.

![feedback platform components](https://gsa.github.io/recruiter/Feedback_Tool_Flow.svg)

## Components
 - [Google Sheets Template](https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy)
 - [Google Tag Manager](https://tagmanager.google.com) - account required
 - [Google Apps Script](https://script.google.com/a/gsa.gov/d/1CSUCE9JHkMOutafCJxw3NTQ-J3n3PZlF0Z9UEJae9KxIlcq_AkWTXsEa/edit?usp=sharing) (for reference only - already bound to Sheets Template)
 - [U.S. Web Design Standards](https://standards.usa.gov/) styles and [form patterns guidance](https://standards.usa.gov/components/form-templates/) for accessibility.

 **Optional**
 - _TODO: Google Analytics integration (capture response events + session metadata)_


## Deploying

### Google Spreadsheet template
 1. Make a copy of the [Spreadsheet template](https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy) (contains gScript for processing submissions)
 2. From main Sheets menu, select `Tools` > `Script editor`

 3. From the Script editor main menu, select `Publish` > `Deploy as web app`

    a. enter `Project Version name` and click `Save New Version`

    b. set `Execute the app as` to `User accessing the web app`

    c. set `Who has access to the app` to `Only myself`

    d. Click `Deploy`

 4. Back in the Spreadsheet, select the `Settings` sheet tab, and copy the value of `WebAppURL`

 5. In Google Tag Manager, paste the value you copied into the `WebAppURL` Custom Variable
    _(TODO: can this be read from the sheet by GTM? Could a custom UI button push this to GTM, where the container ID is added to the `Settings` tab on the sheet?)_


### Google Tag Manager
1. Download [gtm-recruiter-to-gsheet.json](https://github.com/laurenancona/recruiter/blob/master/gtm-recruiter-to-sheet.json)
2. If needed, [create a Tag Manager](https://tagmanager.google.com) account. _(If GTM is already in use on the site and you have access to the container, skip to Step 4)_
3. Create a new Tag Manager Container and `Publish` the (currently empty) container.
4. In Main Menu under `Admin` > ` Container`, select `Import Container` _(TODO: TEST import to a GTM container)._

    a. For `Choose Container File`, select the file you downloaded above.

    b. For `Choose workspace`:

      - For new containers, select `New`

      - For existing containers, select `Existing`

    c. For `Choose an import option` select `Merge`

5. Install (or have agency install) the Tag Manager snippet code in the site template.
6. Create any specialized `Triggers` in Tag Manager, e.g. "Only show recruiter on pages in /directory", etc. for the following `Tag`:

    - `recruiter.js` Controls where the recruiter "tab" appears within the site. By default, it is set to appear on all pages that have the GTM snippet installed.

7. Test GTM config correctly loads recruiter locally (see [Preview and Debug containers](https://support.google.com/tagmanager/answer/6107056?visit_id=1-636286168306770023-1579186406&rd=1))
8. **Publish** GTM container. **Reminder: this is equivalent to pushing code to production and should follow any QA + testing standards.**


##### Default fields provided in this configuration:

 | Field name | Type | Description |
 | ---------- | ---- | ----------- |
 | Date | Timestamp | submission time and date |
 | Name | String | First name |
 | Email | String | Email address |
 | UserAgent | String | OS + Version, Browser + version |
 | URL* | String | URI of page where form was submitted |
 | Referrer* | String | Referring page (how user arrived at PageURL |

**\*Note:** When deploying to sites where URLs contain references to content that may infer information of a personal or sensitive nature (e.g. visiting content related to medical conditions on NIH.gov), you may wish to omit passing the last two fields (`URL` and `Referrer`) to the Sheet. This can be done simply by removing the last two query parameters (`&Referrer={{Referrer}}&URL={{Page URL}}`) from the URL in the `Recruiter to Google Sheet` Custom Image Tag in GTM.

###### TODO: how to customize capture fields.

 **Note: PIA, [PRA](https://www.usability.gov/how-to-and-tools/guidance/pra-overview.html) or other privacy or security compliance issues may be triggered for any customized capture fields. Consult Chief Privacy Officer and/or PRA Desk Officer before deploying any customized form versions.**


## Roadmap
Recruiter is the first part of a larger WIP feedback platform implemented via Google Tag Manager.
