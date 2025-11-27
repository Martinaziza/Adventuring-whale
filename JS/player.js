class Player {
    //left and top sets the image on the screen
    //width and height is the size of the image
  constructor (gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = 150
    this.height = 75;
    this.directionX = 0
    this.directionY = 0
    //create img tag for the player
    this.element = document.createElement("img")
    this.element.src = "../Images/whale player 1.png"
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.position = "absolute"
    this.gameScreen.appendChild(this.element)
  }
}
