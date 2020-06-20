const messageArea = document.getElementById('msg-col');
const gameArea = document.querySelector('#content');
const gameLocation = gameArea.getBoundingClientRect();
const mouseTracking = document.getElementById('mouseArea')
const btnStart = document.querySelector('button');

const gameXStart = gameLocation.x;
const gameXEnd = gameLocation.x + gameLocation.width;
const gameYStart = gameLocation.y;
const gameYEnd = gameLocation.y + gameLocation.height;

//Starting the Game

btnStart.addEventListener('click', startGame)

function startGame() {
  //reset Instructions & Button
  mouseTracking.innerHTML = '';
  document.getElementById("start").style.visibility = "hidden";
  messageArea.innerHTML = `<h4 class="mt-3">Instructions:</h4>
  <p>Move your mouse across the maze and follow the hints to find the secret location!</p>`

  //Set winning coordinates
  const winningX = ((Math.floor(Math.random() * ((gameLocation.width)-20))))+10;
  const winningY = ((Math.floor(Math.random() * ((gameLocation.height)-20))))+10;
  
  console.log(`Winning X: ${winningX}`, `Winning Y: ${winningY}`)

  //Track the mouse
  document.addEventListener('mousemove', runEvent);
  function runEvent(e) {

    //Logic for determining distance from goal
    let xDiff = Math.abs(winningX - e.offsetX);
    let yDiff = Math.abs(winningY - e.offsetY);
    let sumDiff = xDiff + yDiff;
    // console.log(xDiff, yDiff);

    function hint() {
      switch (true) {
        case (sumDiff > gameXEnd):
          return "Glacial...🥶";
        case (sumDiff < gameXEnd) && (sumDiff > ((gameLocation.width)/2) ):
          return "Ice cold...🧊";
        case (sumDiff < ((gameLocation.width)/10) ):
          return "Red Hot! 🔥";
        case (sumDiff < ((gameLocation.width)/6) ) && (sumDiff > ((gameLocation.width)/10) ):
          return "Getting Hot...🌶️";
        case (sumDiff < ((gameLocation.width)/4) ) && (sumDiff > ((gameLocation.width)/6) ):
          return "Warmer...☀️";
        case (sumDiff < ((gameLocation.width)/2) ) && (sumDiff > ((gameLocation.width)/4) ):
          return "Less cold...🌡️";
      
          default:
            return "No Data";
      }
    }

    if (((Math.abs(yDiff)) <= 35 ) && ((Math.abs(xDiff)) <=35 )) {
      messageArea.innerHTML = `<h1 class='my-auto pt-2'>WINNER!!</h1><p>Not bad! The spot was: X: ${winningX}, Y: ${winningY}. Want to try again?</p>`

      mouseTracking.innerHTML = '<img src="img/giphy.gif" id="winGif"></img>';

      btnStart.innerText = 'Reset';

      document.removeEventListener('mousemove', runEvent);
      document.getElementById("start").style.visibility = "visible";

    } else {
      mouseTracking.innerText = 
      `
      You are here: 
      X - Axis: ${e.offsetX} 
      Y - Axis: ${e.offsetY}
      
      Pixels Away: ${hint()}
      `;
    }
  }
}

//Construction Area
// console.log(gameArea);
// console.log(gameLocation);
// console.log(`X Start: ${gameXStart}`);
// console.log(`X End: ${gameXEnd}`);
// console.log(`Y Start: ${gameYStart}`);
// console.log(`Y End: ${gameYEnd}`);