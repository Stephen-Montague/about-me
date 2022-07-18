'use strict';

// Life Experience Guessing Game
let gameScore = 0;
let validGameInput = null;
let rawGameInput = null;
let userName = prompt('Hello, stranger. These popups are here to demo some basic javascript for Code Fellows. Can I ask your name?');

if (userName !== null) { // If user clicks 'Cancel' skip all popups.
  alert(`Welcome to the site ${userName}! 
  Please guess on the following facts about me.`);

  let question0 = 'Yes or no... I have 7 lifetimes of experience. (Enter Y/N)';
  let question1 = 'Yes or no... I have 7 daughters. (Enter Y/N)';
  let question2 = 'Yes or no... I have experience in game development. (Enter Y/N)';
  let question3 = 'Yes or no... I have a BA in International Studies: East Asia. (Enter Y/N)';
  let question4 = 'Yes or no... I have Japanese language skills. (Enter Y/N)';

  let gameQuestions = [question0, question1, question2, question3, question4];
  let gameAnswers = ['n', 'n', 'y', 'y', 'y'];

  lifeExperienceGame(gameQuestions,gameAnswers);
  luckyNumberGuessingGame();
  favoriteThingsGame();

} // End initial Cancel option, to load page immediately.

function lifeExperienceGame(gameQuestions,gameAnswers) {

  let rightAnswerMsg = 'Nice. You guessed right.';
  let wrongAnswerMsg = 'That\'s not quite right, but let\'s continue.';
  let invalidAnswerMsg = 'I\'m sorry, but that\'s not a valid answer.';

  for (let i = 0; i < 5; i++) {
    rawGameInput = prompt(gameQuestions[i]).toLowerCase();
    if (rawGameInput === 'y' || rawGameInput === 'n' ||
    rawGameInput === 'yes' || rawGameInput === 'no') {
      validGameInput = rawGameInput.charAt(0);
      if (validGameInput) {
        if (validGameInput === gameAnswers[i]) {
          alert(rightAnswerMsg);
          ++gameScore;
        } else {
          alert(wrongAnswerMsg);
        }
      } // End if(validGameInput)
    } else {
      alert(invalidAnswerMsg);
    }
  } // End for loop handling the life experience game.
  alert(`Wow, ${userName}, you got ${gameScore} right so far.`);
}

function luckyNumberGuessingGame() {
  // Lucky Number Guessing Game
  let totalGuessCount = 4;
  let finalGuessIndex = totalGuessCount - 1;
  let luckyMin = 1;
  let luckyMax = 20;
  let luckyNumber = (Math.floor(Math.random() * (luckyMax - luckyMin + 1) + luckyMin)); // Random 1-20 inclusive.
  let luckyPromptMsg0 = 'Let\'s play another game. ';
  let luckyPromptMsg1 = 'Guess the lucky number between 1-20.\nNumber of guesses: ';
  let parsedInput = null;
  validGameInput = null;
  for (let guessCount = 0; guessCount < totalGuessCount; guessCount++) {
    if (guessCount === 0) {
      rawGameInput = prompt(luckyPromptMsg0 + luckyPromptMsg1 + totalGuessCount);
    } else {
      rawGameInput = prompt(luckyPromptMsg1 + (totalGuessCount - guessCount));
    }
    parsedInput = parseInt(rawGameInput);
    if (isNaN(parsedInput) || parsedInput < 1 || parsedInput > 20) {
      alert('Bad guess, buddy.');
      continue;
    } else {
      validGameInput = parsedInput;
      if (validGameInput === luckyNumber) {
        alert('You got it! The lucky number: ' + luckyNumber);
        ++gameScore;
        break;
      } else if (guessCount === finalGuessIndex) {
        alert('Too bad - that was the last guess. The lucky number: ' + luckyNumber);
        break;
      } else if (validGameInput > luckyNumber) {
        alert('Too big!');
      } else {
        alert('Too small!');
      }
    }
  } // End for loop handling the lucky number guess counter.
}

function favoriteThingsGame() {
  // Favorite Things Guessing Game
  let fruitPromptMsg0 = 'Let\'s play one last game. Your score is now: ';
  let fruitPromptMsg1 = '\nGuess my 5 favorite tropical fruit. 1 point per right guess.\nNumber of guesses: ';
  let fruitNames = ['papaya', 'starfruit', 'rambutan', 'lychee', 'coconut'];
  let guessedFruitNames = [];
  let totalFruit = fruitNames.length;
  guessedFruitNames.length = totalFruit;
  let fruitGameScore = 0;
  let totalGuessCount = 7;
  let finalGuessIndex = totalGuessCount - 1;
  validGameInput = null;
  for (let usedGuessCount = 0; usedGuessCount < totalGuessCount; usedGuessCount++) {
    if (usedGuessCount === 0) {
      rawGameInput = prompt(fruitPromptMsg0 + gameScore + fruitPromptMsg1 + totalGuessCount);
    } else {
      rawGameInput = prompt(fruitPromptMsg1 + (totalGuessCount - usedGuessCount));
    }
    if (rawGameInput === '') {
      alert('Nothing is not my favorite.');
      continue;
    } else if (rawGameInput === null) {
      alert('Quitting game.');
      break;
    } else {
      validGameInput = rawGameInput.toLowerCase();
      for (let i = 0; i < totalFruit; i++) {
        if (validGameInput === fruitNames[i]) {
          if (validGameInput !== guessedFruitNames[i]) {
            ++gameScore;
            ++fruitGameScore;
            alert(`Yay, "${fruitNames[i]}" is correct.`);
            guessedFruitNames[i] = fruitNames[i];
            break;
          } else {
            alert(`Yes, but you already guessed ${guessedFruitNames[i]}.`);
            continue;
          }
        } else if (i === totalFruit - 1) { // If last fruit index is checked
          alert(`Sorry, "${rawGameInput}" is not my favorite tropical fruit.`);
        }
      }
      if (usedGuessCount === finalGuessIndex) {
        alert(`That was the last guess. My favorite tropical fruits: 
      ${fruitNames[0]}, ${fruitNames[1]}, ${fruitNames[2]}, ${fruitNames[3]}, ${fruitNames[4]}.
      You guessed ${fruitGameScore} of ${totalFruit} fruit.
      All Games Final Score: ${gameScore}`);
      }
    }
  } // End fruit guess-counter for loop
}
