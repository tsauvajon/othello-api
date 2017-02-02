var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('/games/ /games/[game-number]/ /games/[game-number]/players/[player]/square/[square-number]  /games/[game-number]/players/[player]/pass/ /games/[game-number]/players/[player]/give-up');
})
  .get('/games', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // return a list of open games
  res.end('');
})
  .get('/games/:gamenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // creates a new game at :gamenumber
  res.end('');
})
  .get('/games/:gamenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  if (req.params.gamenumber > 0){

  }
  // returns the game state
  res.end({ code: '-1', message: 'Game not found'});
})
  .get('/games/:gamenumber/players/:player/play/:squarenumber', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  // plays square :squarenumber, for player :player in game :gamenumber
  // return code state ?? 1 for ok, -1 for not this player's turn, -2 for square not playable, -3 for error ?
  res.end('1');
})
  .use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Not found !');
});


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Othello API running on port %s", port)
});
