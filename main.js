let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgessBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {
        songName: "Eh Sochan Soch Ke Dil Me",
        filePath: "songs/1.mp3",
        CoverPath: "covers/nusrat.jpg",
    },
    {
        songName: "Zindgi",
        filePath: "songs/2.mp3",
        CoverPath: "covers/gilll.jpg",
    },
    {
        songName: "Tu Badal Gaya Sajna",
        filePath: "songs/3.mp3",
        CoverPath: "covers/shazia.jpg",
    },
    {
        songName: "Mile Ho Tum",
        filePath: "songs/4.mp3",
        CoverPath: "covers/neha.jpg",
    },
    {
        songName: "Shamaan Pai Gaiyaan",
        filePath: "songs/5.mp3",
        CoverPath: "covers/kashif.jpg",
    },
    {
        songName: "Ishq Mubarak",
        filePath: "songs/6.mp3",
        CoverPath: "covers/arjit.jpg",
    },
    {
        songName: "Enna Sona",
        filePath: "songs/7.mp3",
        CoverPath: "covers/arjit.jpg",
    },
    {
        songName: "Mujhko Barsaat Bana Lo",
        filePath: "songs/8.mp3",
        CoverPath: "covers/armaan.jpg",
    },
    {
        songName: "Haal-E-Dil",
        filePath: "songs/9.mp3",
        CoverPath: "covers/sreema.jpg",
    },
];
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener("timeupdate", () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgessBar.value = progress;
});
myProgessBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgessBar.value * audioElement.duration) / 100;
});


//to play all song in order
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 9) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})