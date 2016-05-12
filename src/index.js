'use strict';

var Hapi = require("hapi");
var Hoek = require('hoek');

var nconf = require("nconf");
nconf.argv().env().file({ file: 'nconf-deve.json' });

var options = {
  host: nconf.get("ABIBAO_WWW_STATIC_EXPOSE_IP"),
  port: nconf.get("ABIBAO_WWW_STATIC_EXPOSE_PORT")
};

var server = new Hapi.Server({
  debug: false,
  connections: {
    routes: {
      cors: true
    }
  }
});

server.connection(options);

server.register(require('inert'), (err) => {
  Hoek.assert(!err, err);
})

server.register(require('vision'), (err) => {
  Hoek.assert(!err, err);
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './templates'
    // layoutPath: './templates/layout',
    // helpersPath: './templates/helpers'
  });
})

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index'
  }
});

server.route({
  method: 'GET',
  path: '/index.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL')
    }
    reply.view('index', data);
  }
});

server.route({
  method: 'GET',
  path: '/mentions.html',
  handler: {
    view: 'mentions'
  }
});

server.route({
  method: 'GET',
  path: '/faq.html',
  handler: {
    view: 'faq'
  }
});

server.route({
  method: 'GET',
  path: '/cgu.html',
  handler: {
    view: 'cgu'
  }
});

/**
templates for charities
**/

server.route({
  method: 'GET',
  path: '/ellesimaginent',
  handler: function(request, reply) {
    var data = {
      page_title: 'Association / Elle’s Imagine’nt',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      charity: {
        name: 'Elle’s Imagine’nt',
        name_long: 'Elle’s Imagine’nt',
        hangs: 'Ensemble, aidons les femmes victimes de violences conjugales',
        urn: 'urn:abibao:database:entity:ffd68c859144a29d0893be25caede9d4a2c69b86986b1d38',
        description: 'Elle’s Imagine’nt est composée de psychologues, d’avocats, d’assistantes sociales et de personnes qui viennent d’autres horizons. Nous accompagnons psychologiquement, juridiquement et socialement les femmes victimes de violences conjugales. Nous animons des groupes de parole et proposons du coaching de retour à l’emploi.',
        picture01: './assets/img/logo_associations/asso-elles_imaginent.png'
        picture02: './assets/img/abibao-flyers-ellesimaginent.jpg'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/clowns',
  handler: function(request, reply) {
    var data = {
      page_title: 'Association / Les Clowns Z’Hôpitaux',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      charity: {
        name: 'Les Clowns Z’Hôpitaux',
        name_long: 'Les Clowns Z’Hôpitaux',
        hangs: 'Faîtes entrer les Clowns à l’hôpital',
        urn: 'urn:abibao:database:entity:ffd68c859144fbc90893be25caede9d4a2c69b86986b1d37',
        description: 'Depuis 2004, l’association "Clowns Z’hôpitaux" a pour objectif de créer et d’organiser des interventions de duos de Clowns en milieu hospitalier et dans tous les établissements de soins à destination de celles et ceux qui ont besoin de réconfort à l’hôpital comme en maison de retraite ou en maison d’accueil spécialisé : enfants, personnes âgées, adultes en situation de handicap.',
        picture01: './assets/img/logo_associations/asso-clowns.png'
        picture02: './assets/img/abibao-flyers-clowns.jpg'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/casdb',
  handler: function(request, reply) {
    var data = {
      page_title: 'Association / Centre Audiovisuel Simone de Beauvoir',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      charity: {
        name: 'Le Centre Simone de Beauvoir',
        name_long: 'le Centre Audiovisuel Simone de Beauvoir',
        hangs: 'Préservons la mémoire des femmes !',
        urn: 'urn:abibao:database:entity:ffd68c859145f29f0893be25caede9d4a2c69b86986b1d35',
        description: 'Créé en 1982, le Centre travaille à la préservation de la mémoire des droits, des luttes et des créations des femmes dans la société. Une collection de 1200 films exceptionnels et uniques sur les femmes, l’art, l’histoire, le sport, le travail, le corps… des années 70 à nos jours.',
        picture01: './assets/img/logo_associations/asso-casdb.png'
        picture02: './assets/img/abibao-flyers-casdb.jpg'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/schola',
  handler: function(request, reply) {
    var data = {
      page_title: 'Association / Schola Africa',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      charity: {
        name: 'Schola Africa',
        name_long: 'Schola Africa',
        hangs: 'Une aventure humaine au Burkina',
        urn: 'urn:abibao:database:entity:ffd68c859144a0ce0893be25caede9d4a2c69b86986b1d39',
        description: 'Schola Africa est une association humanitaire étudiante (loi 1901) œuvrant pour la scolarisation et la formation professionnelle en milieu rural au Burkina Faso. Nous menons également des actions de promotion de la culture africaine et de sensibilisation aux problématiques du développement dans la métropole lilloise.',
        picture01: './assets/img/logo_associations/asso-scholaafrica'
        picture02: './assets/img/abibao-flyers-schola.jpg'
      }
    }
    reply.view('association', data);
  }
});

/**
assets
**/

server.route({
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: __dirname + '/templates/assets/'
    }
  }
});

server.start(function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('server running at:', server.info.uri);
});
