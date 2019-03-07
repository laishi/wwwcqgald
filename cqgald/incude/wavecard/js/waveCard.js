$(document).ready(function() {



    $('.waveCard').hover(waveIn, waveOut);

    function waveIn() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: "+50vh", ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log("waveIn")
    }


    function waveOut() {
        TweenMax.to($(this).children(".waveCont"), 2, { top: "0vh", ease: Elastic.easeOut.config(1.3, 0.3) });
        console.log("waveOut")
    }

})