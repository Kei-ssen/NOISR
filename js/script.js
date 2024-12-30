// HAMBURUGER MENU 
$(document).ready(function() {

    // MENÚ
    $('#burger').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // PLAY/PAUSA REPRODUCTOR MÚSICA
    $('.play').on('click', function() {
        var $li = $(this).closest('li');
        var audio = $li.find('audio')[0];
        var playButton = $li.find('.play');
        var pauseButton = $li.find('.pause');

        $('audio').each(function() {
            if (!$(this).is(audio)) {
                this.pause();
                $(this).closest('li').find('.play').show();
                $(this).closest('li').find('.pause').hide();
            }
        });

        audio.play();
        playButton.hide();
        pauseButton.show();
    });

    $('.pause').on('click', function() {
        var $li = $(this).closest('li');
        var audio = $li.find('audio')[0];
        var playButton = $li.find('.play');
        var pauseButton = $li.find('.pause');

        audio.pause();
        pauseButton.hide();
        playButton.show();
    });

    // MODO CLARO/OSCURO
    $("#to-dark-mode").click(function() {
        $("#section1 .cs-item, #section1 .cs-intro, .artistTop-grid").css("background-color", "rgba(0, 0, 0, 0.2)");

        $("#to-light-mode").removeClass("hide-cont");
        $("#to-dark-mode").addClass("hide-cont");
    });

    $("#to-light-mode").click(function() {
        $("#section1 .cs-item, #section1 .cs-intro, .artistTop-grid").css("background-color", "rgba(255, 255, 255, 0.4)");

        $("#to-dark-mode").removeClass("hide-cont");
        $("#to-light-mode").addClass("hide-cont");
    });

    // BTN ROTAR
    $('.dreamNoise-btn').hover(function() {
        $(this).addClass('rotated');
    });
});

