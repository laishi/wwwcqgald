$(document).ready(function() {


    var homekey = 0.35;
    var teamkey = 0.42;
    var workkey = 0.58;
    var contactkey = 0.65;

    TweenMax.to(".navHome", 1, { attr: { keyPoints: homekey + ";" + homekey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });
    TweenMax.to(".navTeam", 1, { attr: { keyPoints: teamkey + ";" + teamkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.to(".navWork", 1, { attr: { keyPoints: workkey + ";" + workkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.to(".navContact", 1, { attr: { keyPoints: contactkey + ";" + contactkey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });
})