window.addEventListener('load', init);

// Globals
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}


let currentLevel = levels.hard

    
document.querySelector('#easyBtn').addEventListener('click', function () {
  setCurrentLevel(levels.easy)
})

document.querySelector('#mediumBtn').addEventListener('click', function() {
  setCurrentLevel(levels.medium)
})

document.querySelector('#hardBtn').addEventListener('click', function() {
  setCurrentLevel(levels.hard)
})

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elemennts
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'fun',
  'billion',
  'park',
  'Superman',
  'quacky',
  'juggler',
  'word',
  'race',
  'bullet',
  'computer',
  'Anne',
  'Jacob',
  'Drew',
  'garden',
  'bike',
  'waffle',
  'hero',
  'statue',
  'loom',
  'backpack',
  'picture',
  'stand',
  'window',
  'marker',
  'bank',
  'chord',
  'lettuce',
  'color',
  'Batman',
  'lego',
  'butkin',
  'sugar',
  
];

//Initialize game
function init() {
  
  seconds.innerHTML = currentLevel;
  //load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener('input', startMatch)
  //call countdown every second
  setInterval(countdown, 1000);
  //check game status
  setInterval(checStatus, 50);
}

//start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  //score is -1 display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//match current word to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
      message.innerHTML = 'Correct!!!'
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }


function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  //make sure time is not run out
  if(time > 0) {
    time--;
  }else if(time === 0) {
      isPaying = false;
    }
    timeDisplay.innerHTML = time;
  }

  function checStatus() {
    if (!isPlaying === false && time === 0) {
      message.innerHTML = 'Game Over!!!';
      score = -1;
    }
  }
  
  function setCurrentLevel(level) {
    currentLevel = level;
    init();
  }
