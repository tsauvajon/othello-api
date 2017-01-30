# Othello Api
Api for 2 player othello games

## Calls :

### GET :
#### /game
list of open games

#### /game/*:gamenumber*
game *:gamenumber* infos and state

### POST :
#### /game/*:gamenumber*
creates a new game / joins an existing game

#### /game/*:gamenumber*/player/*:player*/square/*:squarenumber*
play square *:squarenumber*, for player *:player* in game *:gamenumber*
Returns :
* 1 for ok,
* -1 for not this player's turn
* -2 for square not playable,
* -3 for other error

#### /game/*:gamenumber*/player/*:player*/pass/
Passes the turn

#### /game/*:gamenumber*/player/*:player*/giveup/
Gives up the game
