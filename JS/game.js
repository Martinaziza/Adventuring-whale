class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.statsElement = document.getElementById("stats");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score")
    //player is another class
    this.player = new Player(this.gameScreen, 50, 200, 120, 60);
    //game screen height and width (adjust the numbers)
    this.height = 300;
    this.width = 600;
    this.obstacles = [];
    this.collectibles = [];
    this.bullets = [];
    this.score = 0;
    this.lives = 3;
    this.maxLives = 5;
    this.gameIsOver = false;
    this.gameInvtervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
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
        //bullet movement
        this.bullets.forEach((bullet, index) => {
            bullet.move();
        //bullet collision
        const bulletRect = bullet.element.getBoundingClientRect();
        const obstacleRect = currentObstacle.element.getBoundingClientRect();
          if (
      bulletRect.left < obstacleRect.right &&
      bulletRect.right > obstacleRect.left &&
      bulletRect.top < obstacleRect.bottom &&
      bulletRect.bottom > obstacleRect.top
    ) {
        currentObstacle.strength--
        this.bullets.splice(index, 1)
        bullet.element.remove();
        if (currentObstacle.strength <= 0){
             this.obstacles.splice(i, 1)
             currentObstacle.element.remove();
             this.score += currentObstacle.points
             this.scoreElement.textContent = this.score;
        }
    } 
    if (bullet.left > 600){
        bullet.element.remove();
        this.bullets.splice(index, 1)
    }
    })

    if (currentObstacle.left < 0 - 100) {
      //removes from array
      this.obstacles.splice(i, 1);
      //removes from html
      currentObstacle.element.remove();
    }
    //check for collision for each obstacle
    if(this.player.didCollide(currentObstacle)){
       //removes from array
      this.obstacles.splice(i, 1);
      //removes from html
      currentObstacle.element.remove();
      this.lives -= currentObstacle.strength;
      this.livesElement.innerText = this.lives;
      
      if (this.lives === 0){
          this.gameIsOver = true;
      }

}
        }
      


for (let i = 0; i < this.collectibles.length; i++) {
      const currentCollectible = this.collectibles[i];
      currentCollectible.move();
      if (currentCollectible.left < 0 - 100) {
        //removes from array
        this.collectibles.splice(i, 1);
        //removes from html
        currentCollectible.element.remove();
      }
      //check for collision for each obstacle
      if(this.player.didCollide(currentCollectible)){
         //removes from array
        this.collectibles.splice(i, 1);
        //removes from html
        currentCollectible.element.remove();
        this.lives+= currentCollectible.livesEarned;
        this.livesElement.innerText = this.lives;
  }

    if (this.lives > this.maxLives){
        this.lives = this.maxLives
        this.livesElement.innerText = this.lives;
      }

    }

    
    
    //random spanning an obstacle
    const obstacleOptions = [
        {width: 140, height: 50, points: 5, strength: 1, imagePath:"Images/obstacle level 1.png"},
        {width: 140, height: 50, points: 10, strength: 2, imagePath: "Images/obstacle level 2.png"},
        {width: 130, height: 45, points: 15, strength: 3, imagePath: "Images/obstacle level 3.png"}
    ]
    
    const randomIndex = Math.floor(Math.random()* obstacleOptions.length)
    const option = obstacleOptions[randomIndex];
    
    if (this.counter % 60 === 0){
        this.obstacles.push(new Obstacle (
            this.gameScreen,
            option.width, 
            option.height, 
            option.points, 
            option.strength,
            option.imagePath
        ))}
        
        const collectibleOptions = [
            {width: 100, height: 60, livesEarned: 1, imagePath: "Images/life 1.png"},
            {width: 90, height: 50, livesEarned: 2, imagePath: "Images/life 2.png"},
            {width: 60, height: 60, livesEarned: 3, imagePath: "Images/life 3.png"}
        ]
        
        const randomCollectible = Math.floor(Math.random()* collectibleOptions.length)
        const currentOption = collectibleOptions[randomCollectible];
        
if (this.counter % 420 === 0){
    this.collectibles.push(new Collectible (
        this.gameScreen,
        currentOption.width, 
        currentOption.height, 
        currentOption.livesEarned, 
        currentOption.imagePath
    ))};
    
}     
shoot (){
    this.bullets.push(new Bullet(this.gameScreen, this.player.left, this.player.top, this.player.width, this.player.height))
};

gameOver() {
  this.gameScreen.style.display = "none";
  this.endScreen.style.display = "block"
};

}
