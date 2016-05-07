	//Event quand la homepage converti
	$('#howto').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			dataLayer.push({
						'event': 'GoToFAQ',
						'eventCategory': 'GoToFAQ',
						'eventAction': subscribe_page,
						'eventLabel': 'Click sur En savoir +'
				        });
		});
	//Event quand la homepage converti
	$('#cta_header').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			dataLayer.push({
						'event': 'inscription',
						'eventCategory': 'subscribe',
						'eventAction': 'via_header',
						'eventLabel': 'Click sur inscription du header'
				        });
		});
	//Event quand la homepage converti
	$('#cta_button').on('click', function (e) {
			//On pousse un évènement pour Google Analytics
	        var subscribe_page = "Page : " + window.location.pathname; //On récupère le nom de la page en cours qui à poussé au subscribe.
			dataLayer.push({
						'event': 'inscription',
						'eventCategory': 'subscribe',
						'eventAction': 'via_button',
						'eventLabel': 'Click sur inscrire du formulaire'
				        });
		});