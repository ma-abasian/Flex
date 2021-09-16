
        // videoPlayer
        // videoPlayer
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


// menu
// menu

        var timer = {};
        var menu = document.getElementById("menu");

        $('> li', menu).hover(function () {
            var tag = $(this);
            var timerAttr = tag.attr('data-time');
            
            clearTimeout(timer[timerAttr]);
            timer[timerAttr] = setTimeout(function () {
                $('> .sub-menu',tag).fadeIn(0);
                
            }, 200);
        }, function () {
            var tag = $(this);
            
            var timerAttr = tag.attr('data-time');
            clearTimeout(timer[timerAttr]);
            
            timer[timerAttr] = setTimeout(function () {
                $('> .sub-menu',tag).fadeOut(0);

            }, 200);
        });