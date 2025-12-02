class Bullet {
   constructor(gameScreen, playerLeft, playerTop, playerWidth, playerHeight){
this.gameScreen = gameScreen;
this.left = playerLeft + playerWidth
this.top = playerTop + playerHeight / 2
this.width = 40
this.height = 20

this.element = document.createElement("img");
    this.element.src = "../Images/water bullet.png" ;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
   } 

   move (){
    this.left += 2
    this.element.style.left = `${this.left}px`
   }
}