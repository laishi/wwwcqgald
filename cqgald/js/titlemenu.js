$(document).ready(function () {





    var titleItem = ""


    $(".page").not(".galdhome").each(function () {

        var menuItem = $(this).data("section-name")

        
        titleItem +=
        "<div class='titleItem'>" +
        "<h1>" + menuItem + "</h1>" +
        "</div>"
        
        
    });
    
    var titleItems = "<div class='titleItems'>" + titleItem + "</div>"
    
    var titleMenus = "<div class='titleMenus'>" + titleItems + "</div>"
    
    $(".page").not(".galdhome").prepend(titleMenus)
    

    










    var n = $(".page").not(".galdhome").length; // Div count


    var OW = 30; // Div over width
    TweenMax.set($(".titleItem"), { width: 100 / n + '%' });
    $(".titleItem").hover(over, out);

    function over() {
        TweenMax.to($(this), 0.3, { width: OW + '%' });
        TweenMax.to($(this).siblings(), 0.3, { width: (100 - OW) / (n - 1) + '%' })
    }

    function out() { TweenMax.to($(".titleItem"), 0.3, { width: 100 / n + '%', ease: Back.easeOut }) }
    /*
    a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
    */










})