$(document).ready(function() {

    var cardHeight = $(".waveCard").height() - 100;
    



    $('.waveCard').hover(waveIn, waveOut);

    function waveIn() {
        console.log("cardHeight: " + cardHeight)
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log($(this).children(".useWave"))
    }


    function waveOut() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight/2, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log("waveOut")
    }

})