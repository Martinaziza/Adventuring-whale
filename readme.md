# Adventuring Whale
<!-- <link> -->
[Play the game!](https://martinaziza.github.io/Adventuring-whale/)

## Description
In this game, you are a whale trying to either avoid boats or shoot them. Use the arrows to move up and down and the spacebar to shoot a water bullet. Different types of boats will give you different amount of points when defeated. Eat the fish to regain lives. 

## MVP
<!-- list of min features -->
- player (whale)
- obstacle (boat)
- when lives = 0, game over
- when obstacles avoided, increase score by 1

## Backlog
<!-- extra features -->
- different type of obstacles (boats)
- different points for different obstacles defeated
- shooting obstacles (removed increase score by 1 if obstacle avoided)
- different strength for different obstacles (have to shoot more than once to defeat)
-  lives (fish)
- different fish give different amount of lives

## Data Structure
### Script.js
- loads the game
- starts the game 
- restarts the game (restart button on game over screen)
- event listeners 
    - tells the arrows to move and the spacebar to shoot

### Game.js
 - constructor 
    - start screen disappears
    - game screen appears
    - grabs the stats (score and lives)
    - details of the player
    - size of the game screen
    - obstacles (boats)
    - collectibles (fish)
    - bullets (water drop)
    - max lives
    - game over
    - game loop

- methods
    - starts the game
        - creates the game screen
        - hides start screen, shows game screen and stats
    
    - game loop
        - makes it run at 1000/60 
        - updates the game 
        - if the game is over, stops the game loop
   
    - update
        - player movement
        - obstacle movement
        - bullet movement
        - obstacle collision with bullet
        - shoot once or more to defeat obstacle
        - if obstacle deafeated, increase score by that obstacle's points
        - if bullet reaches the end of the game screen, remove it
        - if obstacles reaches the end of the game screen, remove it
        - if player collides with obstacle, remove lives depending on obstacle
        - checks if lives = 0, and if so goes to game over screen
        - collectible movement
        - if collectible reaches end of screen, remove it
        - if collectible collides with player, increase lives by that collectible
        - max lives
        - randomly spawn obstacle
        - randomly spawn collectible
    
    - shoot 
        - creates the bullet 

    - gameOver
        - hides the game screen
        - shows game over screen

### Player.js
- constructor
    - where player appears on screen
    - size of the player
    - directions
    - creating the image of the player

- methods
    - move
        - player movemenet 
        - keep player within game screen
    
    - updatePosition
        - updates player position

    - didCollide(obstacle)
        - chekcks whether player collided with an obstacle

### Obstacle.js
- constructor
     - where obstacle appears on screen horizontally
     - appear randomly vertically
     - image for the obstacle

- methods
    - move
        - tells the obstacle how to move
    - updatePosition
        - moves the obstacle
### Collectible.js
- constructor 
    - where it appears on screen horizontally
    - randomly appears on scren vertically
    - image for collectible

-  methods
    - move
        - tells the collectible how to move
    - updatePosition
        - moves the collectible


### Bullet.js
- constructor 
    - where the bullet appears horizontally and vertically
    - size of the bullet
    - image for the bullet

-  methods
    - move
        - tells the bullet how to move
        - moves the bullet

## States 
- Start screen
- Game screen
- End screen

## Links
<!-- slides -->
<!-- gh repo -->
<!-- deployment -->