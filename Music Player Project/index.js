const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");
const icons = document.getElementById("icons");


icon.onclick = function() {

    if (mySong.paused) {
        mySong.play();
        icon.getElementsByClassName = "fa fa-pause-circle";
    }
}

icons.onclick = function() {
    if (mySong.play) {
        mySong.pause();
        icons.getElementsByClassName = "fa fa-play-circle"

    }

}