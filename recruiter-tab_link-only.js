(function ( d, N ) { 'use strict';
  // All form components are namespaced under 'fba' = 'Feedback Analytics'
	N.fba = {
		css:
		// '#fba-overlay.is-active{ position: fixed;bottom: 0;top: 0;left: 0;right: 0;background-color: rgba(0,0,0,.25);transition: background-color .25s;z-index: 1000;}' +
		// '#fba-modal{z-index: 1001;position: fixed;top:0;left: 0;right: 0;overflow-x:auto;padding:20px;}' +
		// '#fba-modal-dialog{max-width:500px;background: #fff;padding:20px;position:relative;margin:0 auto;}' +
		'#fba-button{position: fixed;bottom: 0;right: 50px;background: #02bfe7;color: #fff;padding: 5px 10px;font-size: 1em;text-decoration: none;z-index: 999999999;}' //+
		// '#fba-modal-title {margin-top: 0;margin-right: 20px;margin-bottom:20px;font-size:2.5rem;}' +
		// '#fba-text-name,#fba-text-email{max-width:100%!important;font-size:100%}' +
		// '#fba-modal-close{position: absolute;top:0;right:0;padding:10px;font-size: 24px;color: #5b616b;background: none;line-height: 1;text-decoration: none;width: auto;}' +
		// '#recruiter-form fieldset {margin: 1rem 0; }' +
		// '#recruiter-form p {margin: 1rem 0;}' +
		// '#recruiter-form label {display:block;margin: 0;}' +
		// '#recruiter-form input {margin-bottom: 1.5rem; width: 75%;}' +
		// '#recruiter-form #fba-submit {width: auto;}',

		init: function( options )
		{
			this.options = options;
			this.loadCss();
			this.loadHtml();
			this.loadButton();
			// this.loadOverlay();
		},
		loadCss: function()
		{
			d.head.innerHTML += '<style>' + this.css + '</style>';
		},
		loadHtml: function()
		{
			this.buttonEl = document.createElement('a');
			this.buttonEl.setAttribute('id', 'fba-button');
			this.buttonEl.setAttribute('href', '#');
			this.buttonEl.innerHTML = this.options.open;

			// this.overlayEl = document.createElement('div');
			// this.overlayEl.setAttribute('id', 'fba-overlay');
			//
			// this.dialogEl = document.createElement('div');
			// this.dialogEl.setAttribute('id', 'fba-modal');
			// this.dialogEl.setAttribute('role', 'dialog');

			// Here lies our form interface
			// this.dialogEl.innerHTML =
			// '<div id="fba-modal-dialog"><h3 id="fba-modal-title">' + this.options.title + '</h3><a id="fba-modal-close" type="button" href="#">&times;</a>' +
			// 	'<p id="fba-description">' + this.options.description + '</p>' +
			// 	'<a href="/web-design-labs/">Learn more</a>' +
			// 	'<form id="recruiter-form"><fieldset>' +
			// 		'<label for="fba-text-name">First name</label><input id="fba-text-name" name="fba-text-name" class="full-name" type="text" maxlength="500">' +
			// 				'<label for="fba-text-email">Email address</label><input id="fba-text-email" name=="fba-text-email" class="email-address" type="email" maxlength="500">' +
			// 		'<label for="fba-text-phone">Phone number</label><input id="fba-text-phone" name="fba-text-phone" class="phone-number" type="tel" maxlength="500">' +
			// 		'<div class="button-wrapper">' +
			// 			'<button type="submit" id="fba-submit" class="usa-button-primary-alt" href="#">' + this.options.send + '</button>' +
			// 		'</div>' +
			// 	'</fieldset></form>' +
			// 	'<p>Note: We won’t share your information with any other organizations or groups, period. </p>' +
			// 	'<p id="fba-dialog-privacy" class="usa-external_link"><a href="https://www.gsa.gov/portal/content/162010">Privacy</a></p>' +
			// 	'</div>';
		},
		handleButtonClick: function(e) { N.fba.loadDialog();e.preventDefault(); },
		handleDialogClose: function(e) { N.fba.closeDialog();e.preventDefault(); },
		handleSubmitClick: function(e) { N.fba.sendFeedback();e.preventDefault(); },
		loadButton: function()
		{
			d.body.appendChild(this.buttonEl);
			d.getElementById('fba-button').addEventListener( 'click', this.handleButtonClick, false );
		}//,
		// loadOverlay: function()
		// {
		// d.body.appendChild(this.overlayEl);
		// },
		// loadDialog: function()
		// {
		// 	d.getElementById('fba-button').removeEventListener('click', this.handleButtonClick, false );
		// 	d.body.removeChild( d.getElementById('fba-button') );
		// 	d.body.appendChild(this.dialogEl);
		// 	d.getElementById('fba-overlay').setAttribute('class','is-active');
		// 	d.getElementById('fba-modal').setAttribute('class','is-active');
		// 	d.getElementById('fba-modal-close').addEventListener( 'click', this.handleDialogClose, false );
		// 	d.getElementById('fba-submit').addEventListener( 'click', this.handleSubmitClick, false );
		// },
		// closeDialog: function()
		// {
		// 	d.getElementById('fba-modal-close').removeEventListener('click', this.handleDialogClose, false );
		// 	d.getElementById('fba-overlay').removeAttribute('class','is-active');
    //   d.getElementById('fba-modal').removeAttribute('class','is-active');
		// 	d.getElementById('fba-submit').removeEventListener('click', this.handleSubmitClick, false );
		// 	d.body.removeChild( d.getElementById('fba-modal') );
		// 	this.loadButton();
		// },
		// sendFeedback: function()
		// {
		// 	alert( this.options.thankyou );
		// 	this.closeDialog();
		// 	dataLayer.push({
		// 	  'event': 'setCookie',
		// 	  'attributes': {
		// 	    'cookieName': 'my_cookie_name',
		// 	    'cookieValue': 'my_cookie_value',
		// 	    'cookieDomain': 'www.myhostname.com',
		// 	    'cookiePath': '/',
		// 	    'cookieExpires': 30 // Number of days - provide a fraction for periods less than 24 hours
		// 	  }
		// 	});
		// }
	};

}( document, window ));

/*
 * Set options for tab text, modal title, description, and alert message after submit.
 * These will be mapped to named variables in Google Tag Manager.
 * During development, we will occasionally load this script directly from Github.
 * Due to scoping issues, the GTM variables will not be available to the script and cause errors.
 * Commenting out for now, to be re-enabled when deployed to prod via GTM.
 */
fba.init( {
 'open': '<a href="#">Help improve this site</a>'//, // {{tabText}}
 // 'title': 'Help NSF better serve you', //{{formTitle}},
 // 'description': 'Thanks for offering to help us improve NSF.gov! Share your contact information below — if you’re selected, we’ll contact you to set up a 30-45 minute conversation with a member of our team.', //{{formDesc}},
 // 'send': 'Submit', //{{buttonLabel}},
 // 'thankyou': 'Thanks for offering to help - we’ll be in touch shortly!' //{{thankYouText}}
} );
