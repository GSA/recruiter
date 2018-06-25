# recruiter [WIP]
Embeddable forms for recruiting usability research participants. Uses Google Tag Manager to load form UI and targeting, and a custom Google Apps Script to send submissions to a Google Sheet.

## Components

![feedback platform components](/docs/img/Feedback_Platform_Components-v2.svg)


 - [Google Sheets Template](https://docs.google.com/a/gsa.gov/spreadsheets/d/1_de-8lkbxPAy0ovb_WH22EI03vX8ZnuZhhiXnXWvxpQ/copy)
 - [Google Tag Manager](https://tagmanager.google.com) - account required
 - [U.S. Web Design System](https://standards.usa.gov/) styles and [form patterns guidance](https://standards.usa.gov/components/form-templates/) for accessibility.

 **Optional**
 - Integration with Google Analytics to send custom events when a user opens, closes, and submits the Recruiter form dialog.


## Deploying
See [Wiki](https://github.com/GSA/recruiter/wiki/Deploying)

## Default fields provided in this configuration:

 | Field name | Type | Description |
 | ---------- | ---- | ----------- |
 | Date | Timestamp | submission time and date |
 | Name | String | First name |
 | Email | String | Email address |
 | UserAgent | String | OS + Version, Browser + version |
 | URL* | String | URI of page where form was submitted |
 | Referrer* | String | Referring page (how user arrived at PageURL |

**\*Note:** When deploying to sites where URLs contain references to content that may infer information of a personal or sensitive nature (e.g. visiting content related to medical conditions on NIH.gov), you may wish to omit passing the last two fields (`URL` and `Referrer`) to the Sheet. This can be done simply by removing the last two query parameters (`&Referrer={{Referrer}}&URL={{Page URL}}`) from the URL in the `Recruiter to Google Sheet` Custom Image Tag in GTM.

 **Warning: PIA, [PRA](https://www.usability.gov/how-to-and-tools/guidance/pra-overview.html) or other privacy or security compliance issues may be triggered for any customized capture fields. Consult your agency's Chief Privacy Officer and/or PRA Desk Officer before deploying any customized form versions.**
 
 ## Compliance
 
 **Paperwork Reduction Act of 1995 (PRA)** 
 - See [exemption conditions](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf).
 
 **Privacy**

- GSA's **[Privacy Act Statement on Design Research](https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research)**

- Collection of data from users such as that requested by tools like Recruiter is authorized by the **E-Government Act of 2002 (P.L. 107-347, 44 USC § 3501)**.

- See GSA's **[Design Research Privacy Impact Assessment (PIA)](https://www.gsa.gov/cdnstatic/design_research_pia_%28signed%29.pdf)** for additional details about the way Recruiter collects and stores administrative data.

 - **Google Sheets** are an approved System of Record for storing personally-identifiable information ([PII](https://www.gsa.gov/portal/content/104256)) under [GSA/CIO-3](https://www.federalregister.gov/documents/2014/08/12/2014-19071/privacy-act-of-1974-notice-of-an-updated-system-of-records).

## Roadmap
Recruiter is the first part of a larger WIP feedback platform implemented via Google Tag Manager.



