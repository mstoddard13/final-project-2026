function playSong(song) {
  let link = "songs/" + song + ".mp3"
  var audio = new Audio(link);
  audio.play();
}
