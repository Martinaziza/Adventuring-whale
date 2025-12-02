window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourNewGame = new Game ()
  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener ("click", ()=>{
    window.location.reload()
})


  function startGame() {
    console.log("start game!");
    ourNewGame.start();
  }
  //event listeners for the player to move
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        console.log("right");
      ourNewGame.player.directionX = 3;
    }
    if (event.code === "ArrowLeft") {
        console.log("left");
      ourNewGame.player.directionX = -3;
    }
    if (event.code === "ArrowUp") {
        console.log("down");
      ourNewGame.player.directionY = -3;
    }
    if (event.code === "ArrowDown") {
        console.log("right");
      ourNewGame.player.directionY = 3;
    }

    if (event.code === "Space"){
      ourNewGame.shoot()
    }
  });
window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") {
        console.log("right");
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowLeft") {
        console.log("left");
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
        console.log("down");
      ourNewGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
        console.log("right");
      ourNewGame.player.directionY =0;
    }
})

};

