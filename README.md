 # Othello Api
 Api for 2 player othello games

 ## Calls :

 ### GET :
 #### /game
 list of open games

 #### /game/:gamenumber
 game :gamenumber infos

 ### POST :
 #### /game/:gamenumber
 creates a new game / joins an existing game

 #### /game/:gamenumber/player/:player/square/:squarenumber
 play square :squarenumber, for player :player in game :gamenumber
 Returns :
  * 1 for ok,
  * -1 for not this player's turn
  * -2 for square not playable,
  * -3 for other error

  #### /game/[game-number]/player/[player]/pass/
  Passes the turn

  #### /game/[game-number]/player/[player]/give-up
  Gives up the game
