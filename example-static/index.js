var server = require('derby-starter');
var app = require('./app');

server.run(app, { 'static': app.getStaticRoutes() });