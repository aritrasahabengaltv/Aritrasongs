const playlist = [
    { name: "Sample Song 1", file: "music/song1.mp3" },
    { name: "Sample Song 2", file: "music/song2.mp3" },
    { name: "Sample Song 3", file: "music/song3.mp3" }
];

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");

function loadPlaylist() {
    playlistEl.innerHTML = "";
    playlist.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.name;
        li.onclick = () => playSong(index);
        li.id = "song-" + index;
        playlistEl.appendChild(li);
    });
}

function playSong(index) {
    const current = document.querySelector("#playlist li.active");
    if (current) current.classList.remove("active");
    const selected = document.getElementById("song-" + index);
    selected.classList.add("active");
    audio.src = playlist[index].file;
    audio.play();
}

audio.onended = () => {
    const currentIndex = playlist.findIndex(song => song.file === audio.src.split("/").pop());
    let nextIndex = currentIndex + 1;
    if(nextIndex >= playlist.length) nextIndex = 0;
    playSong(nextIndex);
}

loadPlaylist();
