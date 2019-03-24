// $(".accordionCont p").css("top", "200px")


var n = $(".accordion").length; // Div count
var OW = 50; // Div over width
TweenMax.set($(".accordion"), { width: 100 / n + '%' });
$(".accordion").hover(over, out);

function over() {
    TweenMax.to($(this), 0.3, { width: OW + '%' });
    TweenMax.to($(this).siblings(), 0.3, { width: (100 - OW) / (n - 1) + '%' })
}

function out() { TweenMax.to($(".accordion"), 0.3, { width: 100 / n + '%', ease: Back.easeOut }) }
/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
*/