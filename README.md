# Othello Api
Api for 2 player othello games

## Calls :

### GET :
#### /game
list of open games

#### /game/*:gamenumber*
game *:gamenumber* infos and state

#### /game/create
creates a new game  
returns : game id

#### /game/join
tries to join an open game  
returns :
* -1 no open game
* { id: game id, player: X or O }

#### /game/*:gamenumber*/player/*:player*/pass/
Passes the turn

#### /game/*:gamenumber*/player/*:player*/giveup/
Gives up the game

#### /game/*:gamenumber*/player/*:player*/square/*:squarenumber*
Plays square *:squarenumber*, for player *:player*, in game *:gamenumber*  
Returns :
* 1 for ok,
* -1 for not this player's turn
* -2 for square not playable,
* -3 for other error

### POST :

Nothing yet
