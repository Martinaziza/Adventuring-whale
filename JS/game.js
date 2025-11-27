class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.statsElement = document.getElementById("stats")
    //player is another class
    this.player = new Player (this.gameScreen, 250, 150 ); 
    //game screen height and width (adjust the numbers)
    // I have these on the CSS do I need to have them here as well? Also does JS override CSS
    this.height = 60;
    this.width = 90;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameInvtervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  start() {
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}vw`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.statsElement.style.display = "flex"

    //create the setInterval
    this.gameInvtervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("gameLoop");
    //checks it/runs 1000/60
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameInvtervalId);
      this.gameOver();
    }
  }
  update() {}
  gameOver() {}
}
