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
        $("#section1 .cs-item, #section1 .cs-intro, .artistTop-grid, #albumes .cs-container").css("background-color", "rgba(0, 0, 0, 0.2)");

        $("#to-light-mode").removeClass("hide-cont");
        $("#to-dark-mode").addClass("hide-cont");
    });

    $("#to-light-mode").click(function() {
        $("#section1 .cs-item, #section1 .cs-intro, .artistTop-grid, #albumes .cs-container").css("background-color", "rgba(255, 255, 255, 0.4)");

        $("#to-dark-mode").removeClass("hide-cont");
        $("#to-light-mode").addClass("hide-cont");
    });

    // BTN ROTAR
    $('.dreamNoise-btn').hover(function() {
        $(this).addClass('rotated');
    });

    // CONTADOR
    var fechaActual = new Date();
    var yearActual = fechaActual.getFullYear();
    const nuevoYear = yearActual;

    const nuevaFecha = new Date("Feb 17, " + nuevoYear + " 00:00:00");

    if (fechaActual > nuevaFecha) {
        nuevaFecha.setFullYear(nuevaFecha.getFullYear() + 1);
    }

    const d = $('#d');
    const h = $('#h');
    const m = $('#m');
    const s = $('#s');

    let countdown = setInterval(function() {
        const ahora = new Date();
        const despues = nuevaFecha.getTime() - ahora.getTime();

        // CALCULAR VARIABLES
        const dias = Math.floor(despues / (1000 * 60 * 60 * 24));
        const horas = Math.floor((despues % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((despues % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((despues % (1000 * 60)) / 1000);

        d.text(getTrueNumber(dias));
        h.text(getTrueNumber(horas));
        m.text(getTrueNumber(minutos));
        s.text(getTrueNumber(segundos));

        if (despues <= 0) clearInterval(countdown);
    }, 1000);

    const getTrueNumber = x => (x < 10 ? "0" + x : x);
});


