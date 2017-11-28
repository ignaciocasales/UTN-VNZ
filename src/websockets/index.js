const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const gameRatings = {};
const gameVotes = {};

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {
  socket.on('rated', function (data) {
    let id = data.id;
    let rating = data.rating;
    if (gameVotes[id]) {
    	gameVotes[id]++;
      gameRatings[id] = gameRatings[id] + rating;
    } else {
    	gameVotes[id] = 1;
      gameRatings[id] = rating;
    }
    io.emit('update', {
	  	id: id,
	  	generalRating: (gameRatings[id]/gameVotes[id])
  	});
  });
  socket.on('load', function (id) {
    if (gameVotes[id]) {
      io.emit('update', {
  	  	id: id,
  	  	generalRating: (gameRatings[id]/gameVotes[id])
    	});
    } else {
      io.emit('update', {
  	  	id: id,
  	  	generalRating: 0
    	});
    }
  });
});
