class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.endScreen = document.getElementById("game-end");
    this.player = null; //player will be another class
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
    this.gameContainer.style.height = `${this.height}vh`;
    this.gameContainer.style.width = `${this.width}vw`;
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";
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
