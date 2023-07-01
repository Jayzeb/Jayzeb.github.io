// Predefined list of words
var words = ["apple", "banana", "orange", "grape", "kiwi"];

function scrambleWord(word) {
  // Scramble the letters of the word
  var scrambledWord = word.split('').sort(function() {
    return 0.5 - Math.random();
  }).join('');
  return scrambledWord;
}

function playGame() {
  // Select a random word from the list
  var word = words[Math.floor(Math.random() * words.length)];
  var scrambled = scrambleWord(word);

  // Display the scrambled word
  var scrambledWordElement = document.getElementById('scrambled-word');
  scrambledWordElement.textContent = scrambled;

  var attempts = 0;

  function checkGuess() {
    var guessInput = document.getElementById('guess-input');
    var guess = guessInput.value.toLowerCase();
    attempts += 1;

    if (guess === word) {
      var message = "Congratulations! You guessed the word correctly in " + attempts + " attempts.";
      setMessage(message, true);
      guessInput.disabled = true;
    } else {
      setMessage("Incorrect guess. Try again.", false);
    }

    guessInput.value = '';
    guessInput.focus();
  }

  function setMessage(message, isCorrect) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = isCorrect ? 'green' : 'red';
  }

  // Expose the checkGuess function to the global scope
  window.checkGuess = checkGuess;
}

// Expose the playGame function to the global scope
window.playGame = playGame;
