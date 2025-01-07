$(document).ready(function() {

     // MENÚ
     $('#burger').click(function() {
        $('.nav-links').toggleClass('active');
    });

    $('.nav-links li a').click(function(){
        $('.nav-links').removeClass('active');
    });
    
    // AOS 
    AOS.init();
    AOS.refresh();

    // HIDE EL MENÚ
    let previousScroll = 0;

    $(window).on('scroll', function() {
        let currentPosition = $(window).scrollTop();
        
        if (currentPosition > previousScroll) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
        
        previousScroll = currentPosition <= 0 ? 0 : currentPosition;
    });

    // MODO CLARO/OSCURO
    $("#to-dark-mode").click(function() {
        $("#formulario .formSect, #playlists .playlist, #playlists .item, #discover .container").css("background-color", "rgba(0, 0, 0, 0.2)");

        $("#to-light-mode").removeClass("hide-cont");
        $("#to-dark-mode").addClass("hide-cont");
    });

    $("#to-light-mode").click(function() {
        $("#formulario .formSect, #playlists .playlist, #playlists .item, #discover .container").css("background-color", "rgba(255, 255, 255, 0.4)");

        $("#to-dark-mode").removeClass("hide-cont");
        $("#to-light-mode").addClass("hide-cont");
    });

    // BTN ROTAR
    $('.dreamNoise-btn').hover(function() {
        $(this).addClass('rotated');
    });
});