

(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    // browserWindow.on('load', function () {
    //     $('.preloader').fadeOut('slow', function () {
    //         $(this).remove();
    //     });
    // });

 
    // :: 1.0 Preloader Active Code
$(document).ready(function() {
    $('.mobile-content').hide();
    let mobile = false
    var mediaQuery = window.matchMedia('(min-width: 1200px)');
    
      $(window).resize(function() {
        var windowWidth = $(window).width();
    });


    // Check if the device is a mobile device
    if (mediaQuery.matches || mobile == true) {
   
    }
    
    
    else {      
        window.location.href = "mobile.html";
    }
});



function playAudio() {
    var audio = new Audio('audio/Windows_94.wav');

    
    // Check if audio is already loaded
    if (audio.readyState >= 2) {
        // Audio is already loaded, play it
        audio.play();
        // Call the function you want to execute after audio finishes playing
        Timeout();
                    changeBackgroundImage();
    } else {
        // If audio is not yet loaded, wait for it to load
        audio.oncanplaythrough = function() {
            // Audio has finished loading, play it
            audio.play();
            // Call the function you want to execute after audio finishes playing
            Timeout();
            changeBackgroundImage();
        };
    }
}

function Timeout(){

    setTimeout(function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
            // Add the function you want to execute after the preloader fades out here
        });
    }, 1000);

}
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function changeBackgroundImage() {
    setTimeout(function () {
        // Replace the background image with a new one
        $('.preloader').css('background-image', 'url(img/core-img/2.png)');
            }, 500);
}
function changeBackgroundImage2() {
    // Replace the background image with a new one
    $('.preloader').css('background-image', 'url(img/core-img/3.png)');
}




    // :: 11.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 12.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });


})(jQuery);