// const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const duration = countDownDate - now;

//     if (duration < 0) {
//         clearInterval(interval);
//         updateDuration(0);
//         return;
//     }

//     updateDuration(duration);
// }, 1000);

// function updateDuration(duration) {
//     const days = Math.floor(duration / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((duration % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
//     const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((duration % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
// };

// Countdown target time in seconds
const countdownSeconds = 23000; // 5 minutes

// Initialize the timer display
const timerDisplay = document.getElementById("timer");

// Function to format time as HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Start the countdown
let timeLeft = countdownSeconds;
timerDisplay.textContent = formatTime(timeLeft);

const interval = setInterval(() => {
  timeLeft--;

  // Update the timer display
  timerDisplay.textContent = formatTime(timeLeft);

  // Stop the countdown at zero
  if (timeLeft <= 0) {
    clearInterval(interval);
    timerDisplay.textContent = "Time's up!";
  }
}, 1000);
