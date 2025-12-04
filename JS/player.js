class Player {
  //left and top sets the image on the screen
  //width and height is the size of the image
  constructor(gameScreen, left, top, width, height) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    //create img tag for the player
    this.element = document.createElement("img");
    this.element.src = "Images/whale player 1.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }
  //change direction (change top and left #)
  move (){
this.left += this.directionX
this.top += this.directionY
// keep player on background
if (this.left < 50){
    this.left = 50
}
if (this.left + 150 > 600){
    this.left = 450
}
if (this.top < 110) {
    this.top = 110
}
if (this.top + 60 > 400 ){
    this.top = 340
}

this.updatePosition()
  }
  //change pic on the page to go to numbers in move method
  updatePosition (){
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }

 didCollide(obstacle){
  const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
 }
}
