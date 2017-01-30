var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('/game/ /game/[game-number]/ /game/[game-number]/player/[player]/square/[square-number]  /game/[game-number]/player/[player]/pass/ /game/[game-number]/player/[player]/give-up');
});

app.get('/game', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // return a list of open games
  res.end('');
})

app.post('/game/:gamenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // creates a new game at :gamenumber
  res.end('');
})

app.get('/game/:gamenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // returns the game state
  res.end('');
})

app.post('/game/:gamenumber/player/:player/play/:squarenumber', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  // play square :squarenumber, for player :player in game :gamenumber
  // return code state ?? 1 for ok, -1 for not this player's turn, -2 for square not playable, -3 for error ?
  res.end('1');
})

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Not found !');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Othello running at http://%s:%s", host, port)

})
