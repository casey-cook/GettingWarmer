const messageArea = document.getElementById('msg-col');
const gameArea = document.querySelector('#content');
const gameLocation = gameArea.getBoundingClientRect();
const mouseTracking = document.getElementById('mouseArea')
const btnStart = document.querySelector('button');
console.log(btnStart);

const gameXStart = gameLocation.x;
const gameXEnd = gameLocation.x + gameLocation.width;
const gameYStart = gameLocation.y;
const gameYEnd = gameLocation.y + gameLocation.height;

//Starting the Game

btnStart.addEventListener('click', startGame)

function startGame() {
  //reset Instructions & Button
  btnStart.innerText = 'Start Game';
  messageArea.innerHTML = `<h4 class="mt-3">Instructions:</h4>
  <p>Move your mouse across the city street and follow the hints to find the secret location!</p>`


  //Set winning coordinates
  const winningX = ((Math.floor(Math.random() * ((gameLocation.width)-20))))+10;
  const winningY = ((Math.floor(Math.random() * ((gameLocation.height)-20))))+10;
  
  console.log(`Winning X: ${winningX}`, `Winning Y: ${winningY}`)

  //Track the mouse
  document.addEventListener('mousemove', runEvent);
  function runEvent(e) {
    let xDiff = Math.abs(winningX - e.offsetX);
    let yDiff = Math.abs(winningY - e.offsetY);
    let sumDiff = xDiff + yDiff;
    // console.log(xDiff, yDiff);


  mouseTracking.innerText = 
     `You are here: 
     X - Axis: ${e.offsetX} 
     Y - Axis: ${e.offsetY}
     
     Pixels Away: ${sumDiff}
     
     `;



    if (((Math.abs(yDiff)) <= 30 ) && ((Math.abs(xDiff)) <=30 )) {
      messageArea.innerHTML = "<h1 class='my-auto pt-2'>WINNER!!</h1><p>Not bad! Want to try again?</p>"

      btnStart.innerText = 'Reset';

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