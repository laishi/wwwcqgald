$(document).ready(function() {

    var cardHeight = $(".waveCard").height() - 100;
    



    $('.waveCard').hover(waveIn, waveOut);

    function waveIn() {
        console.log("cardHeight: " + cardHeight)
        TweenMax.to($(this).children(".waveCont"), 2, { top: cardHeight, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log($(this).children(".parallax"))
    }


    function waveOut() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: 0, ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log("waveOut")
    }

})