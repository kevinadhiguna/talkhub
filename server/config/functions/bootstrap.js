'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

module.exports = () => {
    var io = require('socket.io')(strapi.server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
            allowHeaders: ['my-custom-header'],
            credentials: true
        }
    });

    io.on('connection', function(socket) {
        socket.on('join', ({username, room}) => {
            console.log("A user connected successfully!");
            console.log("username is ", username, " room is ", room);
        })
    })
};
