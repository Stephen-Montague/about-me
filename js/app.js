'usestrict';

let userName = prompt('Hello, stranger. These popups are here to demo some basic javascript for Code Fellows. Can I ask your name?');

if (userName !== null){ // If user clicks 'Cancel' skip all popups.
  alert(`Welcome to the site ${userName}! 
  Please guess on the following facts about me.`);

  let question0 = 'Yes or no... I have 7 lifetimes of experience. (Enter Y/N)';
  let question1 = 'Yes or no... I have 7 daughters. (Enter Y/N)';
  let question2 = 'Yes or no... I have experience in game development. (Enter Y/N)';
  let question3 = 'Yes or no... I have a BA in International Studies: East Asia. (Enter Y/N)';
  let question4 = 'Yes or no... I have Japanese language skills. (Enter Y/N)';

  let rightAnswerMsg = 'Nice. You guessed right.';
  let wrongAnswerMsg = 'That\'s not quite right, but let\'s continue.';
  let invalidAnswerMsg = 'I\'m sorry, but that\'s not a valid answer.';

  let gameQuestions = [question0, question1, question2, question3, question4];
  let gameAnswers = ['n', 'n', 'y', 'y', 'y'];
  let rawGameInput = null;
  let validGameInput = null;
  let gameScore = 0;

  for (let i = 0; i < 5; i++){
    rawGameInput = prompt(gameQuestions[i]).toLowerCase();
    if (rawGameInput === 'y' || rawGameInput === 'n' ||
      rawGameInput === 'yes' || rawGameInput === 'no'){
      validGameInput = rawGameInput.charAt(0);
      if (validGameInput){
        if(validGameInput === gameAnswers[i]) {
          alert(rightAnswerMsg);
          ++gameScore;
        }else{
          alert(wrongAnswerMsg);
        }
      } // End if(validGameInput)
    }else{
      alert(invalidAnswerMsg);
    }
  } // End for loop;
  alert(`Wow, ${userName}, you got ${gameScore} right.`);
}
