	//Event quand la homepage converti
	$('#howto').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Navigation',
						  eventAction: 'GoToFAQ',
						  eventLabel: 'Header From : '+subscribe_page
						});
		});
	//Event quand la homepage converti
	$('#cta_header').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Conversion',
						  eventAction: 'subscribe',
						  eventLabel: 'Header From : '+subscribe_page
						});
		});
	//Event quand la homepage converti
	$("#mail-catcher").submit(function(event) {
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Conversion',
						  eventAction: 'subscribe',
						  eventLabel: 'Form homepage'
						});
	});
	//Event quand Clic sur CGU
	$('#CGU').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Navigation',
						  eventAction: 'GoToCGU',
						  eventLabel: 'Header From : '+subscribe_page
						});
		});
	//Event quand Clic sur Mentions Legales
	$('#mentions').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Navigation',
						  eventAction: 'GoToMentions',
						  eventLabel: 'Header From : '+subscribe_page
						});
		});