/// <reference path="../typings/index.d.ts" />

"use strict";

import * as Hapi from 'Hapi';
import knex from './knex';

const server: Hapi.Server = new Hapi.Server();

server.connection( {
    port: 8080
} );

server.route({
    method: 'GET',
    path: '/',
    handler: (request: Hapi.Request, reply: Hapi.IReply) => {
        reply('Joł!');
    }

});

server.start( err => {

    if( err ) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );