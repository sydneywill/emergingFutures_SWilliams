document.addEventListener("DOMContentLoaded", function () {
    const algorithmVideo = document.getElementById("algorithmVideo");
    const pagesVideo = document.getElementById("pagesVideo");

    algorithmVideo.pause();
    pagesVideo.pause();

    algorithmVideo.addEventListener("loadedmetadata", function () {
        algorithmVideo.currentTime = 0.5;
    });
    pagesVideo.addEventListener("loadedmetadata", function () {
        pagesVideo.currentTime = 0.5;
    });

   
    algorithmVideo.addEventListener("mouseenter", function () {
        algorithmVideo.play();
    });

    algorithmVideo.addEventListener("mouseleave", function () {
        algorithmVideo.pause();
        algorithmVideo.currentTime = 0; // beginning reset
    });

    
    pagesVideo.addEventListener("mouseenter", function () {
        pagesVideo.play();
    });

    pagesVideo.addEventListener("mouseleave", function () {
        pagesVideo.pause();
        pagesVideo.currentTime = 0; // beginning reset
    });
});