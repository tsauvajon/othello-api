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

app.get('/game/:gamenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // return the game state
  res.end('');
})

app.get('/game/:gamenumber/player/:player/play/:squarenumber', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // play square :squarenumber, for player :player in game :gamenumber
  res.end('');
})

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
})

app.listen(8080);
//app.listen(8081);
