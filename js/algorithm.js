var video_count = 1;
var total_videos = 7;
var videoPlayer = document.getElementById("algorithmVideo");
var videoSource = document.getElementById("videoSource");

function nextVideo() {
    video_count++;
    if (video_count > total_videos) {
        video_count = 7;
    }

    var nextVideoSrc = "assets/algSeq" + ("0" + video_count).slice(-2) + ".mp4";
    videoSource.src = nextVideoSrc;
    videoPlayer.load();
    videoPlayer.play();
}

videoPlayer.addEventListener("click", nextVideo, false);