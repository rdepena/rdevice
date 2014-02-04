(function () {
    'use strict';
    
    var io = require('socket.io');
    var socket = io.connect('http://rcore-server');

    socket.on('message', function (data) {
        console.log(data);
    });

    socket.emit('eventNameHere', { my: 'data' });
})();