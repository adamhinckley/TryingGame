window.addEventListener('load', init);

// Globals
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
  practice: 9999
}
let currentLevel = levels.easy;
const newWordField = '';
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
const addWord = document.querySelector('#addWord');
const addWordMessage = document.querySelector('#addWordMessage');
const mode = document.querySelector('#mode');

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
  'sugar'

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
  setInterval(checStatus, 100);
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
      isPlaying = false;
    }
    timeDisplay.innerHTML = time;
  }

function checStatus() {
  if (!isPlaying === false && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
// set current level to button clicked
function setCurrentLevel(level) {
  currentLevel = level;
  seconds.innerHTML = currentLevel;
}
document.querySelector('#easyBtn').addEventListener('click', function () {
  setCurrentLevel(levels.easy)
  mode.innerHTML = '5 seconds per word'
})

document.querySelector('#mediumBtn').addEventListener('click', function() {
  setCurrentLevel(levels.medium)
  mode.innerHTML = '3 seconds per word'
})

document.querySelector('#hardBtn').addEventListener('click', function() {
  setCurrentLevel(levels.hard)
  mode.innerHTML = '2 seconds per word'
})

document.querySelector('#practiceBtn').addEventListener('click', function() {
  setCurrentLevel(levels.practice)
   mode.innerHTML = "practice mode"
})

// add word to words array

document.querySelector('#addBtn').addEventListener('click', function() {
  if (addWord.value !== ''){
    words.push(addWord.value);
    console.log(words);
    addWordMessage.innerHTML = 'added ' + addWord.value;
    clearField(addWord.value);
  } else {
    addWordMessage.innerHTML = 'add a word';
  }
})

function clearField () {
  document.querySelector('#addWord').value = '';
}