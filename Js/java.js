
        // videoPlayer

        var videoPlayer = document.getElementById("videoPlayer");
        var myVideo = document.getElementById("myVideo");

        function playPause(file) {
            myVideo.src = file;
            videoPlayer.style.display = "block";
            myVideo.play();
        }

        function stopVideo() {
            myVideo.pause();
            videoPlayer.style.display = "none";
        }

        // if (myVideo.paused) {
        //         $('#video-s').show();
        //         myVideo.play();
        //     }
        //     else {
        //         $('#video-s').hide();
        //         myVideo.pause();
        //     }