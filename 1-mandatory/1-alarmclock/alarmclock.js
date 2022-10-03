const input = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
let seconds, countDownInterval, flashInterval;

const timeFormatter = (sec) => {
  if (sec >= 60 * 60) {
    return new Date(sec * 1000).toISOString().substr(11, 8);
  }
  return new Date(sec * 1000).toISOString().substr(14, 5);
};

function setAlarm() {
  seconds = input.value;
  if (seconds <= 0) {
    return alert("Please enter a valid time in seconds.");
  }
  input.value = "";
  countDown();
  countDownInterval = setInterval(countDown, 1000);
}

const countDown = () => {
  timeRemaining.innerHTML = `Time Remaining: ${timeFormatter(seconds)}`;
  seconds--;
  if (timeRemaining.innerHTML === "Time Remaining: 00:00") {
    playAlarm();
    clearInterval(countDownInterval);
    flashInterval = setInterval(flashBg, 1000);
  }
};

let flash = true;
const flashBg = () => {
  const randomColorCode = Math.floor(Math.random() * 16777215).toString(16);
  if (flash) {
    document.body.style.backgroundColor = "#" + randomColorCode;
    flash = false;
  } else {
    document.body.style.backgroundColor = "white";
    flash = true;
  }
};

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(flashInterval);
  document.body.style.backgroundColor = "white";
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
