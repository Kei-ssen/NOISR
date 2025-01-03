$(document).ready(function() {

    // MENÚ
    $('#burger').click(function() {
        $('.nav-links').toggleClass('active');
    });

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
    var fechaActual = new Date();
    var yearActual = fechaActual.getFullYear();
    const nuevoYear = yearActual;
    
    // Fechas específicas para cada contador
    const fecha1 = new Date("Feb 17, " + nuevoYear + " 00:00:00");
    const fecha2 = new Date("Feb 25, " + nuevoYear + " 00:00:00");
    const fecha3 = new Date("Feb 28, " + nuevoYear + " 00:00:00");
    
    // Si la fecha actual ya pasó la fecha objetivo, asignamos el próximo año
    if (fechaActual > fecha1) {
        fecha1.setFullYear(fecha1.getFullYear() + 1);
    }
    if (fechaActual > fecha2) {
        fecha2.setFullYear(fecha2.getFullYear() + 1);
    }
    if (fechaActual > fecha3) {
        fecha3.setFullYear(fecha3.getFullYear() + 1);
    }
    
    function startCountdown(classPrefix, targetDate) {
        const d = $('.' + classPrefix + ' .d');
        const h = $('.' + classPrefix + ' .h');
        const m = $('.' + classPrefix + ' .m');
        const s = $('.' + classPrefix + ' .s');
    
        let countdown = setInterval(function() {
            const ahora = new Date();
            const despues = targetDate.getTime() - ahora.getTime();
    
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
    }
    
    const getTrueNumber = x => (x < 10 ? "0" + x : x);
    
    // Llamamos a la función para cada contador con su fecha específica
    startCountdown('new1', fecha1);
    startCountdown('new2', fecha2);
    startCountdown('new3', fecha3);
});
