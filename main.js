// Matchmaking example in Node.JS
const io = require('socket.io');
const server = io.listen(4343);
const mm = require('./modules/mm');
const game = require('./modules/game');

exports.server = server;

server.on('connection', (socket) => {
    console.log("Player has connected", socket.id);

    socket.on('startMM', (name) => {
        // Create the new player object
        mm.newPlayer(name, socket);
    })

    socket.on('ready', (matchId) =>{
      game.readyUp(matchId, socket.id);
    })

    socket.on('validateWord', (matchId, string) =>{
      game.validateWord(matchId, socket.id, string);
    })
});
