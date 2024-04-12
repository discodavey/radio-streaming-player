const streamPlayer = document.querySelector('.stream-player');
const play = document.querySelector('.play');
let currentTime = document.querySelector('.current');
let lengthTime = document.querySelector('.length');

  setInterval(function () {
      console.log(streamPlayer.currentTime);
      currentTime.innerHTML = getTimeCodeFromNum(streamPlayer.currentTime);
      lengthTime.innerHTML = getTimeCodeFromNum(streamPlayer.duration);
  }, 500);

  play.addEventListener("click", (burger) => {
    if (streamPlayer.paused) {
      play.classList.replace("play", "pause");
      streamPlayer.play();
      console.log(burger.value);
    } else {
      play.classList.replace("pause", "play");
      streamPlayer.pause();
    }
  },
  false
);

// Convert time to readable
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
