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
    path: './templates',
    layoutPath: './templates/layout',
    helpersPath: './templates/helpers'
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
  handler: {
    view: 'index'
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
  path: '/les_clowns_z_hopitaux.html',
  handler: function(request, reply) {
    var data = {
      page_title: 'Association / Les Clowns Z’Hôpitaux',
      charity: {
        name: 'Les Clowns Z’Hôpitaux',
        description: 'Depuis 2004, l’association "Clowns Z’hôpitaux" a pour objectif de créer et d’organiser des interventions de duos de Clowns en milieu hospitalier et dans tous les établissements de soins à destination de celles et ceux qui ont besoin de réconfort à l’hôpital comme en maison de retraite ou en maison d’accueil spécialisé : enfants, personnes âgées, adultes en situation de handicap.',
        picture: './assets/img/logo_associations/asso-clowns.png'
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
