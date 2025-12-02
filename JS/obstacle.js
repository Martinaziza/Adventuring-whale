class Obstacle {
  //left and top sets the image on the screen
  //width and height is the size of the image
  constructor(gameScreen, width, height, points, strength, imagePath) {
    this.gameScreen = gameScreen;
    this.left = 550;
    this.top = Math.floor(Math.random() * (220) +120); 
    this.width = width;
    this.height = height;
    this.points = points;
    this.strength = strength;
    //this.health = health
    //create img tag for the obstacle
    this.element = document.createElement("img");
    this.element.src = imagePath;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }
  //change direction (change top and left #)
  move (){
this.left += -2
this.updatePosition()
  }
  //change pic on the page to go to numbers in move method
  updatePosition (){
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }
}
