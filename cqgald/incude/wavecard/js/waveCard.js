$(document).ready(function() {

    var cardHeight = $(".waveCard").height();
    // var waveContTop = $(".waveCont").css("top");

    TweenMax.to($(".waveCont"), 10, { top: cardHeight / 3, ease: Elastic.easeOut.config(1.3, 0.3) });


    $('.waveCard').hover(waveIn, waveOut);

    function waveIn() {

        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight / 1.5, ease: Elastic.easeOut.config(1.3, 0.3) });
    }


    function waveOut() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight / 3, ease: Elastic.easeOut.config(1.3, 0.3) });
    }

})