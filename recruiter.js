/**
 * Adapted from Google Analytics Feedback Widget
 * Version 1.1.0 by Xavi Esteve | http://xaviesteve.com
 */

(function ( d, N ) { 'use strict';

	N.fba = {
		css: 	'#fba-button{position:fixed;bottom:0;right:50px;background:#02bfe7;color:#fff;padding:5px 10px;font-size:1em;text-decoration:none;z-index:999999999}' +
			'#fba-dialog{position:fixed;top:20%;left:33%;right:33%;min-width:350px;background:#f1f1f1;padding:20px;z-index:999999999}' +
			'#fba-dialog h3{margin-top:0.5em}' +
			'#fba-type{text-align:center}' +
			'#fba-type a{display:inline-block;width:24%;min-width:6em;text-align:center}' +
			'#fba-type a:hover{opacity:.7}' +
			'#fba-type a.active{font-weight:bold;text-decoration:underline}' +
			'#fba-text-name,#fba-text-email{padding:.5em 0;text-align:center;max-width:100%!important;font-size:100%}' +
			'#fba-dialog-close{position:absolute;top:0%;right:0%;padding:5px 9px;font-size:24px;color:rgba(0,0,0,.3);line-height:1;text-decoration:none}' +
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

			// Here lies our form interface
			this.dialogEl.innerHTML =
				'<form id="recruiter-form"><h3>' + this.options.title + '</h3><a id="fba-dialog-close" href="#">&times;</a>' +
					'<p id="fba-description">' + this.options.description + '</p>' +
				  '<fieldset>' +
						'<label for="fba-text-name">Your first name</label><input id="fba-text-name" name="fba-text-name" class="full-name usa-input-required" type="text" required="" aria-required="true" maxlength="500">' +
		    		'<label for="fba-text-email">Your email address</label><input id="fba-text-email" name=="fba-text-email" class="email-address usa-input-required" type="text" required="" aria-required="true" maxlength="500">' +
						'<div class="button-wrapper">' +
				  		'<input type="submit" id="fba-submit" class="usa-button-primary-alt" href="#"></input>' +
						'</div>' +
					'<fieldset>' +
					'<p id="fba-dialog-privacy" class="usa-external_link"><a href="#">Privacy</a></p>' +
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

			d.getElementById('fba-dialog-close').addEventListener( 'click', this.handleDialogClose, false );
			d.getElementById('fba-submit').addEventListener( 'click', this.handleSubmitClick, false );
		},
		closeDialog: function()
		{
			d.getElementById('fba-dialog-close').removeEventListener('click', this.handleDialogClose, false );
			d.getElementById('fba-submit').removeEventListener('click', this.handleSubmitClick, false );

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

// Set options for tab text, modal title, description, and alert message after submit.
fba.init( {
 'open': 'Help improve this site',
 'title': 'Do you have a few minutes to help us test this site?',
 'description': 'Hi! We’re looking for people to participate in a 30 minute phone interview about how they use [agency.gov]. If selected, we’ll contact you to set up a time.',
 'send': 'Send',
 'thankyou': 'Thank you - we will be in touch shortly!'
} );
