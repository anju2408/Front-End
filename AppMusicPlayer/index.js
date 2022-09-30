const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const img = document.querySelector("img");


const songs = [{
        name: "1",
        title: "Baby",
        artist: "Justien Biber",

    },

    {
        name: "2",
        title: "Lenka",
        artist: "Lenka",

    },
    {
        name: "3",
        title: "Aankho me",
        artist: "Aryans",

    }, {
        name: "4",
        title: "Woh Lamhe",
        artist: "Atif Aslam",

    },

    {
        name: "5",
        title: "Tera hone",
        artist: "Atif aslam",

    },
    {
        name: "6",
        title: "Tu jane na",
        artist: "Atif Aslam",

    }, {
        name: "7",
        title: "Bin Tere",
        artist: "the loyalist",

    },

    {
        name: "8",
        title: "Aasmano ko",
        artist: "Aurora",

    },
    {
        name: "9",
        title: "Coca Cola",
        artist: "Tony Kakkar",

    }, {
        name: "10",
        title: "Lotus Lane",
        artist: "the loyalist",

    },

    {
        name: "12",
        title: "Aye Khuda",
        artist: "Aurora",

    },
    {
        name: "13",
        title: "Walking Firiri",
        artist: "Gorkhali Takma",

    }, {
        name: "14",
        title: "Lotus Lane",
        artist: "the loyalist",

    },

    {
        name: "15",
        title: "Sappheiros",
        artist: "Aurora",

    },
    {
        name: "16",
        title: "Walking Firiri",
        artist: "Gorkhali Takma",

    }, {
        name: "17",
        title: "Lotus Lane",
        artist: "the loyalist",

    },

    {
        name: "18",
        title: "Sappheiros",
        artist: "Aurora",

    },
    {
        name: "19",
        title: "Walking Firiri",
        artist: "Gorkhali Takma",

    }, {
        name: "20",
        title: "Aawara sham hai",
        artist: "Gorkhali Takma",

    }
];

let isPlaying = false;

// For play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// For pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    // if (isPlaying) {
    //     pauseMusic();
    // } else {
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic();
});

//Changing the music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".png";

};

songIndex = 0;
// loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);