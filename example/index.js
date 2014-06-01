var server = require('derby-starter');
var app = require('./app');

server.run(app, { 'static': __dirname + '/bower_components/bootstrap/dist' });