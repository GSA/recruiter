/**
 * Adapted from Google Analytics Feedback Widget
 * Version 1.1.0 by Xavi Esteve | http://xaviesteve.com
 */

(function ( d, N ) { 'use strict';

N.gaf = {
	css: 	'#gaf-button{position:fixed;bottom:0;right:50px;background:rgba(61, 194, 85, 0.8);color:#fff;padding:4px 7px 8px 7px;font-size:12px;border-top-left-radius:5px;border-top-right-radius:5px;text-decoration:none;z-index:999999999}' +
		'#gaf-dialog{position:fixed;top:20%;left:25%;right:25%;background:rgba(255,255,255,0.9);box-shadow:0 0 25px #aaa;max-width:500px;padding:20px;z-index:999999999}' +
		'#gaf-dialog h5{text-align:center;font-size:24px;margin:0}' +
		'#gaf-type{text-align:center}' +
		'#gaf-type a{display:inline-block;width:24%;min-width:6em;text-align:center}' +
		'#gaf-type a:hover{opacity:.7}' +
		'#gaf-type a.active{font-weight:bold;text-decoration:underline}' +
		'#gaf-text-name,#gaf-text-email{padding:.5em 0;text-align:center;max-width:100%!important;font-size:100%}' +
		'#gaf-submit{text-decoration:none,margin-left:auto;margin-right:auto;display:block;}' +
		'#gaf-submit:hover{opacity:.7}' +
		'#gaf-dialog-close{position:fixed;top:17%;right:35.5%;padding:10px;font-size:24px;color:rgba(0,0,0,.3);line-height:1;max-width:500px;text-decoration:none}' +

		'@media only screen and (max-width:800px){' +
			'#gaf-dialog{left:10%;width:80%}' +
			'#gaf-dialog-close{right:10%}' +
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
		this.buttonEl.setAttribute('id', 'gaf-button');
		this.buttonEl.setAttribute('href', '#');
		this.buttonEl.innerHTML = this.options.open;

		this.dialogEl = document.createElement('div');
		this.dialogEl.setAttribute('id', 'gaf-dialog');
		this.dialogEl.innerHTML = '<form id="recruiter-form"><h5>' + this.options.title + '</h5><a id="gaf-dialog-close" href="#">&times;</a>' +
			'<p id="gaf-description">' + this.options.description + '</p>' + 
			'<input id="gaf-text-name" class="full-name" type="text" placeholder="Your full name" maxlength="500">' +
          		'<input id="gaf-text-email" class="email-address" type="text" placeholder="Your email address" maxlength="500">' +
			'<div class="button-wrapper"><button id="gaf-submit" href="#">' + this.options.send + '</button></div></form>';
	},
	handleButtonClick: function(e) { N.gaf.loadDialog();e.preventDefault(); },
	handleDialogClose: function(e) { N.gaf.closeDialog();e.preventDefault(); },
	handleSubmitClick: function(e) { N.gaf.sendFeedback();e.preventDefault(); },
	loadButton: function()
	{
		d.body.appendChild(this.buttonEl);
		d.getElementById('gaf-button').addEventListener( 'click', this.handleButtonClick, false );
	},
	loadDialog: function()
	{
		d.getElementById('gaf-button').removeEventListener('click', this.handleButtonClick, false );

		d.body.removeChild( d.getElementById('gaf-button') );

		d.body.appendChild(this.dialogEl);

		d.getElementById('gaf-dialog-close').addEventListener( 'click', this.handleDialogClose, false );
		d.getElementById('gaf-submit').addEventListener( 'click', this.handleSubmitClick, false );
	},
	closeDialog: function()
	{
		d.getElementById('gaf-dialog-close').removeEventListener('click', this.handleDialogClose, false );
		d.getElementById('gaf-submit').removeEventListener('click', this.handleSubmitClick, false );

		d.body.removeChild( d.getElementById('gaf-dialog') );

		this.loadButton();
	},

	sendFeedback: function()
	{
		alert( this.options.thankyou );
		this.closeDialog();
	}
};

}( document, window ));

gaf.init( {
 'open': 'Help us improve this site',
 'title': 'Do you have a few minutes to help us test this site?',
 'description': 'Hi! We’re looking for people to participate in a 30 minute phone interview about how they use Agency.gov. If selected, we’ll contact you to setup a time.',
 'send': 'Send',
 'thankyou': 'Thank you - we will be in touch shortly!'
} );
