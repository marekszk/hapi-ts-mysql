/// <reference path="../typings/index.d.ts" />
"use strict";
exports.__esModule = true;
var Hapi = require("Hapi");
var server = new Hapi.Server();
server.connection({
    port: 8080
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Joł!');
    }
});
server.start(function (err) {
    if (err) {
        // Fancy error handling here
        console.error('Error was handled!');
        console.error(err);
    }
    console.log("Server started at " + server.info.uri);
});
