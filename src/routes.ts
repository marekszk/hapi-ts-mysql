import * as Hapi from 'Hapi';
import knex from './knex';
import { Bird } from './models/bird.interface';

export const routes = [
    {
        path: '/birds',
        method: 'GET',
        handler: (request: Hapi.Request, reply: Hapi.IReply ) => {    
            const getOperation = knex( 'birds' ).where( {
                isPublic: true
            } ).select( 'owner', 'name', 'species', 'picture_url', 'guid', 'isPublic' ).then( ( results ) => {
                if( !results || results.length === 0 ) {
                    reply( {
                        error: true,
                        errMessage: 'no public bird found',
                    } );
                }
                reply( {
                    dataCount: results.length,
                    data: results,
                } );
            } ).catch( ( err ) => {
                reply( 'server-side error' );
            } );
        }
    },
    {
        path: '/birds',
        method: 'POST',
        handler: (request: Hapi.Request, reply: Hapi.IReply ) => {    
            const bird: Bird = request.payload;
            console.log(bird.guid);
            
            const insertOperation = knex( 'birds' ).insert( {
                owner: bird.owner,
                name: bird.name,
                species: bird.species,
                picture_url: bird.picture_url,
                guid: bird.guid,
                isPublic: bird.isPublic
            } ).then( ( res ) => {

                reply( {

                    data: request.payload.guid,
                    message: 'successfully created bird'

                } );

            } ).catch( ( err ) => {

                reply( 'server-side error' );

            } );
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (request: Hapi.Request, reply: Hapi.IReply) => {
            reply('Joł!');
        }

    }
]