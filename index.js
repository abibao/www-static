'use strict';

var path = require('path');
var Hapi = require("hapi");
var Inert = require('inert');

var nconf = require("nconf");
nconf.argv().env().file({ file: 'nconf-env.json' });

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
server.register(Inert, function () {});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    file: './www/index.html'
  }
});

server.route({
  method: 'GET',
  path: '/faq.html',
  handler: {
    file: './www/faq.html'
  }
});

server.route({
  method: 'GET',
  path: '/mentions.html',
  handler: {
    file: './www/mentions.html'
  }
});

server.route({
  method: 'GET',
  path: '/cgu.html',
  handler: {
    file: './www/cgu.html'
  }
});

server.route({
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: './www/assets/'
    }
  }
});

server.start(function(err) {
  if (err) {
    return console.dir(err);
  }
  console.log('server running at:', server.info.uri);
});