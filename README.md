# recruiter [WIP]
Embeddable forms to recruit usability research participants. Sends results to a Google Sheet, deployed via Google Tag Manager.

## Components

#### [Google Tag Manager](https://tagmanager.google.com)
1. Create a new Tag Manager Container (if GTM is already in use on the site, skip to Step 2).
2. Upload [recruiter-gtm-config.json]() (TODO: upload container configuration) to a GTM container.
3. Customize these variables(?) (TODO: script URL? test if sharing extant app works when someone else tries to deploy) 

#### [Google Spreadsheet template](https://docs.google.com/a/gsa.gov/spreadsheets/d/14vquDC_hCroparaee6dcYzMfR-VAPUeZskLwS3IBhpU/edit?usp=sharing) 
- Make a copy of the Spreadsheet template (contains gScript for processing submissions)
 1. Enter sheet name and key on **Settings** tab
 2. Run > setup
 3. Publish > Deploy as web app
    * enter Project Version name and click 'Save New Version'
    * set security level and enable service (most likely execute as 'me' and access 'anyone, even anonymously)
 
 4. Copy the 'Current web app URL' and post this in your form/script action
 5. Insert column names on your destination sheet matching the parameter names of the data you are passing in (exactly matching case)

## Roadmap
Recruiter is the first part of a larger platform for collecting user feedback via Google Tag Manager.
