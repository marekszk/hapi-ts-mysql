/// <reference path="../typings/index.d.ts" />

"use strict";

import * as Hapi from 'Hapi';
import knex from './knex';
import { routes } from './routes';

const server: Hapi.Server = new Hapi.Server();

server.connection( {
    port: 8080
} );

routes.forEach( ( route ) => {
    
    console.log( `attaching ${route.method} ${ route.path }` );
    server.route( route );

});

server.start( err => {

    if( err ) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );