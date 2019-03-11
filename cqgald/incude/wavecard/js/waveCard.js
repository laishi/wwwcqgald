$(document).ready(function() {

    var cardHeight = $(".waveCard").height();
    var waveContTop = $(".waveCont").css("top");

    // TweenMax.to($(".waveCont"), 1, { top: cardHeight / 10, ease: Elastic.easeOut.config(1.3, 0.3) });


    $('.waveCard').hover(waveIn, waveOut);

    function waveIn() {
        console.log("waveContTop: " + waveContTop)
        console.log("cardHeight: " + cardHeight)
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight / 1.5, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log($(this).children(".useWave"))
    }


    function waveOut() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight / 3, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log("waveOut")
    }

})