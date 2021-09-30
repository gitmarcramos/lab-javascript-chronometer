const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId;

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  let beautyTime = chronometer.split();
  minDecElement.textContent = beautyTime[0];
  minUniElement.textContent = beautyTime[1];
}

function printSeconds() {
  let beautyTime = chronometer.split();
  secUniElement.textContent = beautyTime[beautyTime.length - 1];
  secDecElement.textContent = beautyTime[beautyTime.length - 2];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const liSplit = document.createElement('li');
  splitsElement.appendChild(liSplit);
  liSplit.textContent = chronometer.split();
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop');
  btnLeftElement.textContent = 'STOP';

  chronometer.stop();
  clearInterval(intervalId);
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split');
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start');
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset');
  btnRightElement.textContent = 'RESET';
  clearInterval(intervalId);

  // const allSplits = document.querySelectorAll('li');
  // console.log(allSplits);

  // for (let i = 0; i < allSplits.length; i++) {
  //   splitsElement.removeChild(allSplits[i]);
  // }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    setInterval(printSeconds, 100);
    setInterval(printMinutes, 100);
  } else if (btnLeftElement.classList.contains('stop')) {
    setStopBtn();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log('click');
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    /////
    const allSplits = document.querySelectorAll('li');
    console.log(allSplits);
  
    for (let i = 0; i < allSplits.length; i++) {
      splitsElement.removeChild(allSplits[i]);
    }
    //////
  } else if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
});
