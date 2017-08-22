  /**
 * Adapted from Google Analytics Feedback Widget
 * Version 1.1.0 by Xavi Esteve | http://xaviesteve.com
 */

(function ( d, N ) { 'use strict';
  // All form components are namespaced under 'fba' = 'Feedback Analytics'
	N.fba = {
		css: 	'#fba-button{position:fixed;bottom:0;right:50px;background:#02bfe7;color:#fff;padding:5px 10px;font-size:1em;text-decoration:none;z-index:999999999}' +
			'#fba-dialog{position:fixed;top:5%;left:33%;right:33%;min-width:350px;background:#f1f1f1;padding:20px;z-index:999999999}' +
			'#fba-dialog h3{margin-top:1em}' +
			'#fba-text-name,#fba-text-email{max-width:100%!important;font-size:100%}' +
			'#fba-dialog-close{position:absolute;top:0%;right:0%;padding:0px 3px;font-size:24px;color:#5b616b;background:none;line-height:1;text-decoration:none}' +
			'#fba-dialog-privacy{position:absolute;bottom:1%;font-size:1.2rem;color:#aeb0b5;}' +

			'@media only screen and (max-width:400px){' +
				'#fba-dialog{left:10%;width:80%}' +
				'#fba-dialog-close{right:10%}' +
			'}',

		init: function( options )
		{
			this.options = options;
			this.loadCss();
			this.loadHtml();
			this.loadButton();
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

			this.dialogEl = document.createElement('div');
			this.dialogEl.setAttribute('id', 'fba-dialog');
			this.dialogEl.setAttribute('role', 'dialog');

			// Here lies our form interface
			this.dialogEl.innerHTML =
				'<form id="recruiter-form"><h3>' + this.options.title + '</h3><a id="fba-dialog-close" type="button" href="#">&times;</a>' +
					'<p id="fba-description">' + this.options.description + '</p>' +
				  '<fieldset>' +
						'<label for="fba-text-name">First name</label><input id="fba-text-name" name="fba-text-name" class="full-name" type="text" maxlength="500">' +
		    				'<label for="fba-text-email">Email address</label><input id="fba-text-email" name=="fba-text-email" class="email-address" type="email" maxlength="500">' +
						'<label for="fba-text-phone">Phone number</label><input id="fba-text-phone" name="fba-text-phone" class="phone-number" type="tel" maxlength="500">' +
						'<div class="button-wrapper">' +
				  		'<input type="submit" id="fba-submit" class="usa-button-primary-alt" href="#"></input>' +
						'</div>' +
					'</fieldset>' +
					'<p id="fba-dialog-privacy" class="usa-external_link"><a href="https://www.gsa.gov/portal/content/162010">Privacy</a></p>' +
				'</form>';
		},
		handleButtonClick: function(e) { N.fba.loadDialog();e.preventDefault(); },
		handleDialogClose: function(e) { N.fba.closeDialog();e.preventDefault(); },
		handleSubmitClick: function(e) { N.fba.sendFeedback();e.preventDefault(); },
		loadButton: function()
		{
			d.body.appendChild(this.buttonEl);
			d.getElementById('fba-button').addEventListener( 'click', this.handleButtonClick, false );
		},
		loadDialog: function()
		{
			d.getElementById('fba-button').removeEventListener('click', this.handleButtonClick, false );
			d.body.removeChild( d.getElementById('fba-button') );

			d.body.appendChild(this.dialogEl);
//			d.body.getElementsByClassName('usa-overlay').setAttribute('opacity', '0.3')

			d.getElementById('fba-dialog-close').addEventListener( 'click', this.handleDialogClose, false );
			d.getElementById('fba-submit').addEventListener( 'click', this.handleSubmitClick, false );
		},
		closeDialog: function()
		{
			d.getElementById('fba-dialog-close').removeEventListener('click', this.handleDialogClose, false );
			d.getElementById('fba-submit').removeEventListener('click', this.handleSubmitClick, false );

	//		d.body.removeChild( d.getElementsByClassName('usa-overlay') );
			d.body.removeChild( d.getElementById('fba-dialog') );

			this.loadButton();
		},

		sendFeedback: function()
		{
			alert( this.options.thankyou );
			this.closeDialog();
		}
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
 'open': 'Help improve this site', // {{tabText}}
 'title': 'Help NSF better serve you', //{{formTitle}},
 'description': 'Thanks for offering to help us improve NSF.gov! Share your contact information below — if you’re selected, we’ll contact you to set up a 45-minute conversation with a member of our team.', //{{formDesc}},
 'send': 'Send', //{{buttonLabel}},
 'thankyou': 'Thank you - we will be in touch shortly!' //{{thankYouText}} 
} );
