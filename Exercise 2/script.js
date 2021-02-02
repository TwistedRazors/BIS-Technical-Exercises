const playButton = document.getElementById('play');
const currentNumberSpan = document.getElementById('currentNumber');
const numOfMilliseconds = 3000; // how long numbers will be randomized
let currentNumber = 0; // current random number

// when the button is clicked, begin the game
playButton.addEventListener('click', playGame);

// randomizes numbers for a length of time before deciding if the player won
function playGame() {
  // set to pick random number between 0 and 100000 every 0.1 seconds
  var play = setInterval(function() {
    currentNumber = Math.floor(Math.random() * 100000) + 1;
    currentNumberSpan.innerHTML = currentNumber; // shows current number on document
  },100);

  // finishes the randomizing process after the specified time and determines if the player won or not.
  // number used is based on the number it stops on
  setTimeout(function() {
    clearInterval(play);
    if (currentNumber >= 1 && currentNumber <= 1000) {
      alert("Congratulations! You won!");
    }
    else {
      alert("Too bad! You've lost!");
    }
  },numOfMilliseconds);
}
