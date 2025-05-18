const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = [
  {
    name: "song1.mp3",
    title: "Cool Vibes",
    cover: "cover1.jpg",
  },
  {
    name: "song2.mp3",
    title: "Chill Beat",
    cover: "cover2.jpg",
  },
  {
    name: "song3.mp3",
    title: "Summer Jam",
    cover: "cover3.jpg",
  },
];

let currentSong = 0;

function loadSong(songIndex) {
  const song = songs[songIndex];
  audio.src = "music/" + song.name;
  title.innerText = song.title;
  cover.src = song.cover;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

// Load the first song on page load
loadSong(currentSong);
