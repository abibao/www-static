	//Event quand la homepage converti
	$('#howto').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
	        alert(subscribe_page);
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Navigation',
						  eventAction: 'GoToFAQ',
						  eventLabel: 'From_'+subscribe_page
						});
		});
	//Event quand la homepage converti
	$('#cta_header').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
	        alert(subscribe_page);
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Conversion',
						  eventAction: 'subscribe',
						  eventLabel: 'Header_From_'+subscribe_page
						});
		});
	//Event quand la homepage converti
/*	$('#cta_button').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
	        alert(subscribe_page);
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Conversion',
						  eventAction: 'subscribe',
						  eventLabel: 'Button_From_'+subscribe_page
						});
		});*/


	$("#mail-catcher").submit(function(event) {
	        alert("submit ! "+subscribe_page);
			ga('send', {
						  hitType: 'event',
						  eventCategory: 'Conversion',
						  eventAction: 'subscribe',
						  eventLabel: 'Button_From_'+subscribe_page
						});
	});