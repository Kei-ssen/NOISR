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

    // PLAY/PAUSA REPRODUCTOR MÚSICA 1
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

    // PLAY/PAUSA REPRODUCTOR MÚSICA 2
    let audioActual = null;
    let Random = false; 
    let audioRandom = null;

    $('.playlistPlay').on('click', function() {
        var $playlist = $(this).closest('.menu-group');
        var $li = $playlist.find('li').eq(1);
        var audio = $li.find('.audioPlayer2')[0];

        if (audio) {
            audio.currentTime = 0;
            audio.play();

            $(this).hide();
            $(this).siblings('.playlistPause').show();

            $li.find('.fa-play').hide();
            $li.find('.fa-pause').show();

            audioActual = audio;

            $playlist.find('.playlistRandom').hide();
        }
    });

    $('.playlistPause').on('click', function() {
        var $playlist = $(this).closest('.menu-group');
        var $li = $playlist.find('li').eq(1);

        if (audioActual) {
            audioActual.pause();
            audioActual.currentTime = 0;
            $(this).hide();
            $(this).siblings('.playlistPlay').show();

            $li.find('.fa-pause').hide();
            $li.find('.fa-play').show();

            $playlist.find('.playlistRandom').show();
        }
    });

    $('.playlistRandom').on('click', function() {
        if (Random) return;

        var $playlist = $(this).closest('.menu-group');
        $(this).hide();
        $playlist.find('.playlistPause').show();
        $playlist.find('.playlistPlay').hide();

        let randomItem = $playlist.find('li').not(':first').not(':last').has('audio').eq(Math.floor(Math.random() * ($playlist.find('li').length - 2)));
        audioRandom = randomItem.find('.audioPlayer2')[0];

        if (audioRandom) {
            audioRandom.play();

            randomItem.find('.fa-play').hide();
            randomItem.find('.fa-pause').show();

            Random = true;
        }
    });

    $('.playlistPause').on('click', function() {
        if (Random && audioRandom) {
            audioRandom.pause();
            audioRandom.currentTime = 0;
            Random = false;
            audioRandom = null;

            var $playlist = $(this).closest('.menu-group');
            $playlist.find('.playlistRandom').show();
            $playlist.find('.fa-pause').hide();
            $playlist.find('.fa-play').show();
        }
    });

    $('.play2').on('click', function() {
        var $li = $(this).closest('li');
        var audio = $li.find('audio')[0];
        var playButton = $li.find('.play2');
        var pauseButton = $li.find('.pause2');
        var $playlist = $li.closest('.menu-group');

        $playlist.find('audio').each(function() {
            if (!$(this).is(audio)) {
                this.pause();
                $(this).closest('li').find('.play2').show();
                $(this).closest('li').find('.pause2').hide();
            }
        });

        audio.play();
        playButton.hide();
        pauseButton.show();
    });

    $('.pause2').on('click', function() {
        var $li = $(this).closest('li');
        var audio = $li.find('audio')[0];
        var playButton = $li.find('.play2');
        var pauseButton = $li.find('.pause2');

        audio.pause();
        pauseButton.hide();
        playButton.show();
    });


    // MODO CLARO/OSCURO
    $("#to-dark-mode").click(function() {
        $("#section1 .item, #section1 .intro, .artistTop-grid, #albumes .container, #artists .container, #formulario .formSect, #playlists .playlist, #playlists .item").css("background-color", "rgba(0, 0, 0, 0.2)");

        $("#to-light-mode").removeClass("hide-cont");
        $("#to-dark-mode").addClass("hide-cont");
    });

    $("#to-light-mode").click(function() {
        $("#section1 .item, #section1 .intro, .artistTop-grid, #albumes .container, #artists .container, #formulario .formSect, #playlists .playlist, #playlists .item").css("background-color", "rgba(255, 255, 255, 0.4)");

        $("#to-dark-mode").removeClass("hide-cont");
        $("to-light-mode").addClass("hide-cont");
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
    
    const fecha1 = new Date("Feb 17, " + nuevoYear + " 00:00:00");
    const fecha2 = new Date("Feb 25, " + nuevoYear + " 00:00:00");
    const fecha3 = new Date("Feb 28, " + nuevoYear + " 00:00:00");
    
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
    
    startCountdown('new1', fecha1);
    startCountdown('new2', fecha2);
    startCountdown('new3', fecha3);

    // PARTICLES.JS
    function initializeParticles(containerId, color) {
        particlesJS(containerId, {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": color
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 15,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    initializeParticles("particles-js-1", "#a42fe3");
    initializeParticles("particles-js-2", "#ffe571");
    initializeParticles("particles-js-3", "#a42fe3");
    
    // VALIDAR FORM
    // VALIDAR FORMULARIO
    $(".formulario").submit(function(e) {
        e.preventDefault();

        let warnings = "";
        let entrar = false;

        const nombre = $("#nombre").val();
        const correo = $("#correo").val();
        const promociones = $("#promociones").is(":checked");

        if (nombre.trim() === "") {
            warnings = "Name is required";
            entrar = true;
        }
        
        if (!entrar && correo.trim() === "") {
            warnings = "Email is required";
            entrar = true;
        } else if (!entrar && !correo.includes("@")) {
            warnings = "Email must contain an '@'";
            entrar = true;
        }

        if (!entrar && !promociones) {
            warnings = "You must accept the terms and conditions";
            entrar = true;
        }

        if (entrar) {
            $(".warnings").html(warnings);
        } else {
            showModal();
        }
    });


    // MODAL
    function showModal() {
        $("#overlay").fadeIn(200);
        $("#modalWindow").fadeIn(200).addClass("show-modal");
    }

    $(".aceptar").click(function() {
        closeModal();
    });

    $("#overlay").click(function() {
        closeModal();
    });

    function closeModal() {
        $("#overlay").fadeOut(200);
        $("#modalWindow").fadeOut(200).removeClass("show-modal");

        // RESTABLECER
        $("#nombre").val("");
        $("#correo").val("");
        $("#promociones").prop("checked", false);

        // OCULTAR WARNINGS
        $(".warnings").html("");
    }
});

