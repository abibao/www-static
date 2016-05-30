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
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('index', data);
  }
});

server.route({
  method: 'GET',
  path: '/index.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('index', data);
  }
});

server.route({
  method: 'GET',
  path: '/mentions.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('mentions', data);
  }
});

server.route({
  method: 'GET',
  path: '/faq.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('faq', data);
  }
});

server.route({
  method: 'GET',
  path: '/cgu.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('cgu', data);
  }
});

server.route({
  method: 'GET',
  path: '/charte.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('charte', data);
  }
});

server.route({
  method: 'GET',
  path: '/prvp.html',
  handler: function(request, reply) {
    var data = {
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE')
    }
    reply.view('prvp', data);
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
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'Elle’s Imagine’nt',
        name_long: 'Elle’s Imagine’nt',
        hangs: 'Ensemble, aidons les femmes victimes de violences conjugales',
        urn: 'urn:abibao:database:entity:ffd68c859144a29d0893be25caede9d4a2c69b86986b1d38',
        description: 'Elle’s Imagine’nt est composée de psychologues, d’avocats, d’assistantes sociales et de personnes qui viennent d’autres horizons. Nous accompagnons psychologiquement, juridiquement et socialement les femmes victimes de violences conjugales. Nous animons des groupes de parole et proposons du coaching de retour à l’emploi.',
        picture01: './assets/img/logo_associations/asso-elles_imaginent.png',
        picture02: './assets/img/abibao-flyers-ellesimaginent.jpg',
        css: 'master-associations.css'
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
      page_title: 'Aidez « Clowns Z’hôpitaux » en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: '« Clowns Z’hôpitaux »',
        name_long: '« Clowns Z’hôpitaux »',
        hangs: 'Faîtes entrer les Clowns à l’hôpital',
        urn: 'urn:abibao:database:entity:ffd68c859144fbc90893be25caede9d4a2c69b86986b1d37',
        description: 'Depuis 2004, l’association « Clowns Z’hôpitaux » a pour objectif de créer et d’organiser des interventions de duos de Clowns en milieu hospitalier et dans tous les établissements de soins à destination de celles et ceux qui ont besoin de réconfort à l’hôpital comme en maison de retraite ou en maison d’accueil spécialisé : enfants, personnes âgées, adultes en situation de handicap.',
        picture01: './assets/img/logo_associations/asso-clowns.png',
        picture02: './assets/img/abibao-flyers-clowns.jpg',
        css: 'master-associations.css'
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
      page_title: 'Aidez le Centre Audiovisuel Simone de Beauvoir en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'Le Centre Audiovisuel Simone de Beauvoir',
        name_long: 'le Centre Audiovisuel Simone de Beauvoir',
        hangs: 'Préservons la mémoire des femmes !',
        urn: 'urn:abibao:database:entity:ffd68c859145f29f0893be25caede9d4a2c69b86986b1d35',
        description: 'Créé en 1982, le Centre travaille à la préservation de la mémoire des droits, des luttes et des créations des femmes dans la société. Une collection de 1200 films exceptionnels et uniques sur les femmes, l’art, l’histoire, le sport, le travail, le corps… des années 70 à nos jours.',
        picture01: './assets/img/logo_associations/asso-casdb.png',
        picture02: './assets/img/abibao-flyers-casdb.jpg',
        css: 'master-associations-casdb.css'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/explore',
  handler: function(request, reply) {
    var data = {
      page_title: 'Aidez l’association Explore en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'Explore',
        name_long: 'le fond Explore',
        hangs: 'Ensemble accélérons les possibles',
        urn: 'urn:abibao:database:entity:ffd68c859144a0ce0893be25caede9d4a2c69b86986b1d39',
        description: 'Laboratoire d’idées et d’actions, le fonds de dotation Explore, reconnu d’intérêt général et présidé par Roland Jourdain, développe et accompagne des projets remarquables qui proposent des solutions réalistes et optimistes aux enjeux environnementaux et sociaux actuels.',
        picture01: './assets/img/logo_associations/asso-explore.png',
        picture02: './assets/img/abibao-flyers-explore.jpg',
        css: 'master-associations.css'
      }
    }
    reply.view('association_fonds', data);
  }
});

server.route({
  method: 'GET',
  path: '/schola',
  handler: function(request, reply) {
    var data = {
      page_title: 'Aidez l’association Schola Africa en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'Schola Africa',
        name_long: 'Schola Africa',
        hangs: 'Une aventure humaine au Burkina',
        urn: 'urn:abibao:database:entity:ffd68c859144a0ce0893be25caede9d4a2c69b86986b1d39',
        description: 'Schola Africa est une association humanitaire étudiante (loi 1901) œuvrant pour la scolarisation et la formation professionnelle en milieu rural au Burkina Faso. Nous menons également des actions de promotion de la culture africaine et de sensibilisation aux problématiques du développement dans la métropole lilloise.',
        picture01: './assets/img/logo_associations/asso-scholaafrica.png',
        picture02: './assets/img/abibao-flyers-schola.jpg',
        css: 'master-associations.css'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/sosh',
  handler: function(request, reply) {
    var data = {
      page_title: 'Aidez l’association SOS-Homophobie en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'SOS-Homophobie',
        name_long: 'SOS-Homophobie',
        hangs: 'Lutte contre la lesbophobie, la gayphobie, la biphobie et la transphobie',
        urn: 'urn:abibao:database:entity:ffd68c859144a5cc0893be25caede9d4a2c69b86986b1d61',
        description: 'SOS Homophobie, est une association française à but non lucratif, de lutte contre les discriminations et les agressions à caractère homophobe à l’encontre des lesbiennes, des gays, des bisexuels et des trans créée le 11 avril 1994. Elle se compose essentiellement de membres bénévoles dans toute la France.',
        picture01: './assets/img/logo_associations/asso-soshomophobie.png',
        picture02: './assets/img/logo_associations/asso-soshomophobie.png',
        css: 'master-associations.css'
      }
    }
    reply.view('association', data);
  }
});

server.route({
  method: 'GET',
  path: '/tfc',
  handler: function(request, reply) {
    var data = {
      page_title: 'Aidez l’association Ticket For Change en répondant à des sondages',
      dashboard_url: nconf.get('ABIBAO_WWW_STATIC_DASHBOARD_URL'),
      ua_code : nconf.get('ABIBAO_WWW_STATIC_UA_CODE'),
      charity: {
        name: 'Ticket For Change',
        name_long: 'Ticket For Change',
        hangs: 'Changer la société par l’entrepreneuriat',
        urn: 'urn:abibao:database:entity:ffd68c859144f6c50893be25caede9d4a2c69b86986b1d36',
        description: 'Ticket for Change accompagne des individus qui utilisent l’entrepreneuriat pour répondre à des problèmes sociaux ou environnementaux. Nous les aidons à passer de l’envie à l’idée et de l’idée à l’action afin qu’ils aient le plus d’impact positif. Nous sommes soutenus par des pionniers de l’innovation sociale comme Nicolas Hulot, Pierre Rabhi ou André Dupon. En 2 ans, nous avons contribué à l’émergence 300 entreprises sociales, dont 40 que nous accompagnons aujourd’hui.',
        picture01: './assets/img/logo_associations/asso-tfc.png',
        picture02: './assets/img/logo_associations/asso-tfc.png',
        css: 'master-associations.css'
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
