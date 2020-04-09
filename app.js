const messageArea = document.getElementById('msg-col');
const gameArea = document.querySelector('#content');
const gameLocation = gameArea.getBoundingClientRect();
const mouseTracking = document.getElementById('mouseArea')

const gameXStart = gameLocation.x;
const gameXEnd = gameLocation.x + gameLocation.width;
const gameYStart = gameLocation.y;
const gameYEnd = gameLocation.y + gameLocation.height;

//Starting the Game

function startGame() {
  //Set winning coordinates
  const winningX = Math.floor(Math.random() * gameLocation.width);
  const winningY = Math.floor(Math.random() * gameLocation.height);
  
  console.log(`Winning X: ${winningX}`, `Winning Y: ${winningY}`)

  //Track the mouse
  document.addEventListener('mousemove', runEvent);
  function runEvent(e) {
    
    mouseTracking.innerText = `Where am I? MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    if ((e.offsetX === winningX) && (e.offsetY === winningY)) {
      messageArea.innerHTML = "<h1 class='pt-2'>WINNER!!</h1>"
    } 
  }
}
startGame();

//Construction Area
console.log(gameArea);
console.log(gameLocation);
console.log(`X Start: ${gameXStart}`);
console.log(`X End: ${gameXEnd}`);
console.log(`Y Start: ${gameYStart}`);
console.log(`Y End: ${gameYEnd}`);