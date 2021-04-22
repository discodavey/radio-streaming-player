const streamPlayer = document.querySelector('.stream-player');
const play = document.querySelector('.play');


play.addEventListener("click", function(){
  streamPlayer.muted = true;
  if(streamPlayer.paused){
    play.classList.replace('play','pause');
    streamPlayer.load();
    streamPlayer.onloadeddata = function(){
    setTimeout(function() {streamPlayer.play(); streamPlayer.muted = false; }, 5000)};
  } else {
    streamPlayer.pause();
    streamPlayer.muted = true;
    play.classList.replace('pause', 'play');
  }
});
