// Ludo.js

// Ludo.js

// Define an array to store player positions and counts.
const players = [
     { color: 'red', position: 0, count: 0 },
     { color: 'blue', position: 0, count: 0 },
     { color: 'green', position: 0, count: 0 },
     { color: 'yellow', position: 0, count: 0 }
 ];
 
 // ...
 
 // Function to move a player's token and display the count.
 function movePlayer(playerColor) {
     const diceResult = rollDice();
     const currentPlayer = players.find(player => player.color === playerColor);
 
     // Update the player's position.
     currentPlayer.position += diceResult;
     currentPlayer.count = diceResult;
 
     // Check if the player has won.
     if (currentPlayer.position >= 24) {
         alert(`${playerColor} player has won!`);
         resetGame();
     } else {
         alert(`${playerColor} player rolled a ${diceResult}.`);
     }
 }
 
 // ...
 
 
 // Define a function to simulate rolling a six-sided dice.
 function rollDice() {
     return Math.floor(Math.random() * 6) + 1;
 }
 
 
 // Function to reset the game.
 function resetGame() {
     for (const playerColor in playerPositions) {
         playerPositions[playerColor] = 0;
     }
 }
 
 // Add a click event listener to the dice element.
 document.getElementById('dice').addEventListener('click', () => {
     const currentPlayer = document.querySelector('.box.blue');
     const currentPlayerColor = currentPlayer.classList.contains('red')
         ? 'red'
         : currentPlayer.classList.contains('green')
         ? 'green'
         : currentPlayer.classList.contains('yellow')
         ? 'yellow'
         : 'blue';
 
     movePlayer(currentPlayerColor);
 });
 
 // You can add more game logic and rules as needed.
 