var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Not found !');
});

router.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('/games/ /games/[game-number]/ /games/[game-number]/players/[player]/square/[square-number]  /games/[game-number]/players/[player]/pass/ /games/[game-number]/players/[player]/give-up');
});


router.route('/games')
  .get(function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // return a list of open games
  res.json('');
});

router.route('/games/:gamenumber')
  .post(function(req, res){
  res.setHeader('Content-Type', 'application/json');
  // creates a new game at :gamenumber
  var game = new Game();
  game.id = req.params.gamenumber;
  game.squares = Array(64).fill(null);
  game.xIsNext = false;
  game.stepNumber = 0;
  game.save(function(err) {
    if (err)
      res.status(503).send(err);
      res.json(game);
  });
})
  .get(function(req, res){
  res.setHeader('Content-Type', 'application/json');
  if (req.params.gamenumber){

  }
  // returns the game state
  res.json({ code: 404, message: 'Game not found'});
});
//   .get('/players/:player/play/:squarenumber', function(req, res){
//   res.setHeader('Content-Type', 'text/plain');
//   // plays square :squarenumber, for player :player in game :gamenumber
//   // return code state ?? 1 for ok, -1 for not this player's turn, -2 for square not playable, -3 for error ?
//   res.json('1');
// })
//   .get('/players/next', function(req, res){
//     res.setHeader('Content-Type', 'application/json');
//     res.json('X');
//   });

router.use(function (req, res, next) {
  // log
  console.log('Smth happened');
  next();
});

var server = app.listen(process.env.PORT || 8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Othello API running on port %s", port)
});



var mongoose = require('mongoose');
var Game = require('./app/models/game');
