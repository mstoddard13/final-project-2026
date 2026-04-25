var audio = document.getElementById('myAudio');

function playSong(song) {
  let link = "songs/" + song + ".mp3"
  audio.src = link;
  audio.play();
}

function playAudio() {
  audio.play();
}
function pauseAudio() {
  audio.pause();
}