class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.statsElement = document.getElementById("stats");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score")
    //player is another class
    this.player = new Player(this.gameScreen, 50, 200, 150, 75);
    //game screen height and width (adjust the numbers)
    this.height = 60;
    this.width = 90;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameInvtervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0
  }

  start() {
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}vw`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.statsElement.style.display = "flex";

    //create the setInterval
    this.gameInvtervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("gameLoop");
    //checks it/runs 1000/60
    this.update();
    this.counter++
    if (this.gameIsOver) {
      clearInterval(this.gameInvtervalId);
      this.gameOver();
    }
  }

  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
      if (currentObstacle.left < 0 - 100) {
        //removes from array
        this.obstacles.splice(i, 1);
        //removes from html
        currentObstacle.element.remove();
        //this.score not working yet
        this.score ++;
        this.scoreElement.innterText = this.score;
      }
      //check for collision for each obstacle
      if(this.player.didCollide(currentObstacle)){
         //removes from array
        this.obstacles.splice(i, 1);
        //removes from html
        currentObstacle.element.remove();
        this.lives --;
        this.livesElement.innerText = this.lives;
        if (this.lives === 0){
            this.gameIsOver = true;
        }
      }
    }

//add a new obstacle  after tot seconds
if(this.counter % 180 === 0){
    this.obstacles.push(new Obstacle(this.gameScreen))
}
  }

  gameOver() {
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block"
  }
}
