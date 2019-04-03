
var iconCont = $(".iconCont")


iconCont.hover(iconIn, iconOut)


function iconIn(item) {

    var iconWidth = $(this).width()

    // TweenMax.fromTo($(this).children(".menuText"), 0.5, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, delay:1  })
    // $(this).children(".menuText").toggleClass("menuTextSize")
    TweenMax.to($(this).children(".menuIcons"), 0.3, { rotationX: 120 })


    console.log($(this).children(".menuIcons").attr("class"))
}

function iconOut(item) {
    TweenMax.to($(this).children(".menuIcons"), 0.3, { rotationX: 0 })
    console.log(item)
}



var eventDirectX = window.innerWidth / 2;
var eventDirectY = window.innerHeight / 2;

window.addEventListener('mousemove', function (e) {

    var clipImage = document.querySelectorAll(".clipImg")

    var imgPosX = 0
    var imgPosY = 0

    if (e.x > eventDirectX) {
        imgPosX = e.x - eventDirectX
    } else {
        imgPosX = e.x - eventDirectX
    }

    if (e.y < eventDirectY) {
        imgPosY = e.y - eventDirectY
    } else {
        imgPosY = e.y - eventDirectY
    }

    eventDirectX = e.x;
    eventDirectY = e.y;

    clipImage.forEach(function (ele, index) {

        imgPoseachX = imgPosX * 10 * ((index - 3) / 100);
        imgPoseachY = imgPosY * 2 * ((index - 3) / 100);

        var sourceX = parseFloat(ele.getAttribute("x"))
        var sourceY = parseFloat(ele.getAttribute("y"))

        ele.setAttribute("x", sourceX + imgPoseachX);
        ele.setAttribute("y", sourceY + imgPoseachY);

    })

});








$(document).ready(function () {

    var curveBg = document.getElementById("curveBg");
    var navCurve = document.getElementById("navCurve");
    var svgCurve = document.getElementById("svgCurve");


    var last_known_scroll_position = 0;
    var curveRate = 1.8;
    var ticking = false;
    var curveValue;
    var rate = 1.8;


    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    var windowHS = windowW / 2;
    var svgBaseHeight = window.innerHeight / rate;




    // INIT VIEWBOX SVG

    var svgHeight = parseInt(curveBg.getAttribute("d").split(" ")[2]);
    var radianHeight = 300
    var resizeRadianHeight = radianHeight * (windowW / windowH / 2)
    var svgRadian = resizeRadianHeight + svgHeight

    $(".headerText").css("marginTop", 500)


    var viewbox = function (windowW, windowH) {

        svgHeight = parseInt(curveBg.getAttribute("d").split(" ")[2]);
        radianHeight = 300
        resizeRadianHeight = radianHeight * (windowW / windowH / 2)
        svgRadian = resizeRadianHeight + svgHeight

        var viewboxSize = "0 0 " + windowW + " " + Math.min(svgRadian, 800)
        var resizeSvg = "M 0 " + svgHeight + " Q " + windowW / 2 + " " + svgRadian + " " + windowW + " " + svgHeight + " V 0 H 0 Z"

        var resizeNavCurve = resizeSvg.split("V")[0]

        svgCurve.setAttribute('viewBox', viewboxSize)
        curveBg.setAttribute("d", resizeSvg);
        navCurve.setAttribute("d", resizeNavCurve);


        $(".clipImg").attr("width", "100%")

        // tween slider
        // var starttw = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 0, });
        // starttw.staggerFromTo('.clipImg', 5, { attr: { x: windowW } },{ ease: SlowMo.ease.config(0.1, 1, false), attr: { x: -windowW } }, 5);


        // var texttw = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 0, });
        // texttw.set('.sliderText', { x: windowW, scale: 1, opacity: 0.2 });
        // texttw.staggerFromTo('.clipImg', 5, { attr: { x: windowW } },{ ease: SlowMo.ease.config(0.5, 1, false), attr: { x: -windowW } }, 5);

        // texttw.staggerTo('.sliderText', 5, { ease: SlowMo.ease.config(0.5, 1, false), attr: { x: -windowW } }, 5);

    }

    viewbox(windowW, windowH)

    // TweenMax.from(curveBg, 0.5, {attr("d": "M 0 " + svgHeight + " Q " + windowW / 2 + " 0 " + windowW + " " + svgHeight + " V 0 H 0 Z")}) 











    // INIT CLIPIMAGE

    var menuItem = $(".menuItem")

    $(".menu1").click(function () {
        $('#galdserver').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    })

    $(".menu2").click(function () {
        $('#galdwork').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    })

    $(".menu1").click(function () {
        $('#galdserver').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    })

    $(".menu4").click(function () {
        $('#galdworkflow').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    })

    $(".menu5").click(function () {
        $('#galdcontact').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    })









    var menuOffset = 0;

    menuToCurve(0, 0.3)
    function menuToCurve(offset, pos) {
        var pathLength = navCurve.getTotalLength()
        $.each(menuItem, function (index, element) {
            prcnt = index / 10 + pos
            var offsetHalf = offset / 2


            if (index == 0) {
                prcnt = prcnt - offset
            }

            if (index == 1) {
                prcnt = prcnt - offsetHalf
            }

            if (index == 3) {
                prcnt = prcnt + offsetHalf
            }

            if (index == 4) {
                prcnt = prcnt + offset
            }

            var distance = prcnt * pathLength
            pt = navCurve.getPointAtLength(distance);



            $(this).css("webkitTransform", 'translate(' + pt.x + 'px, ' + pt.y + 'px)');
            // $(this).css("webkitTransform", 'translate3d(' + pt.x + 'px,' + pt.y + 'px, 0)' + 'rotateY(0deg) ' + 'rotateX(0deg) ' + 'rotateZ(' + angle + 'deg)');



            // menuItem.css("opacity", 1)
            // TweenMax.to(menuItem, 10, {"opacity": 0, scale: 1, delay: 1, ease: Elastic.easeOut.config(1.3, 0.3)})


        })
    }

    // TweenMax.fromTo(menuItem, 2, {"opacity": 0, scale: 0, delay: 1, }, {"opacity": 1, scale: 1, delay: 1, ease: Elastic.easeOut.config(1.3, 0.3)})

    var scrollDriction = 0
    function scrollEvent(scrollPos) {

        var sp = 0

        if (scrollPos > scrollDriction) {
            sp = scrollPos - scrollDriction
        } else {
            sp = scrollPos - scrollDriction
        }

        scrollDriction = scrollPos
        var headerImageY = 0
        $.each($(".clipImg"), function (index, item) {
            headerImageY = parseFloat($(this).attr("y"))
            $(this).attr("y", headerImageY + sp * 1.5);
        })






        var menuOffsetScroll = Math.min(menuOffset + scrollPos / windowW, 0.3)
        menuToCurve(menuOffsetScroll, 0.3)


        // logopos = $(".galdCicle").offset().top + 30
        logopos = 450
        var minPos = Math.min(logopos, scrollPos);
        TweenMax.to($(".headerImg"), 1, { y: minPos });


        if (scrollPos >= 0 && scrollPos < window.innerHeight) {

            curveValue = svgRadian - parseFloat(scrollPos * curveRate);

            var svgBgD = "M 0 " + svgHeight + " Q " + windowW / 2 + " " + curveValue + " " + windowW + " " + svgHeight + " V 0 H 0 Z"
            // var svgnavD = "M 0 " + svgHeight + " Q " + windowW / 2 + " " + curveValue + " " + windowW + " " + svgHeight


            curveBg.setAttribute("d", svgBgD);
            navCurve.setAttribute("d", svgBgD.split("V")[0]);

        }
    }


    window.addEventListener("scroll", function (e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                scrollEvent(last_known_scroll_position);
                ticking = false;
            });
        }

        ticking = true;
    });



    // $('.galdLogo').hover(handlerIn, handlerOut);

    function handlerIn() {
        TweenMax.to(".navHome", 2, { attr: { keyPoints: '0.398;0.398' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navTeam", 2, { attr: { keyPoints: '0.445;0.445' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navWork", 2, { attr: { keyPoints: '0.555;0.555' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navContact", 2, { attr: { keyPoints: '0.602;0.602' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
    }


    function handlerOut() {
        TweenMax.to(".navHome", 2, { attr: { keyPoints: '0.35;0.35' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navTeam", 2, { attr: { keyPoints: '0.42;0.42' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navWork", 2, { attr: { keyPoints: '0.58;0.58' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navContact", 2, { attr: { keyPoints: '0.65;0.65' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
    }



    window.addEventListener('resize', function (event) {

        //RESIZE VIEWBOX
        windowW = window.innerWidth;
        windowH = window.innerHeight;
        viewbox(windowW, windowH)
        menuToCurve(0, 0.3)

        var pathLength = Math.floor(navCurve.getTotalLength());
        pathLength = Math.floor(navCurve.getTotalLength());

        // d="M 0(A.x) 700(A.y) Q 960(ABhandle.X) 1000(ABhandle.y) 1920(BC.X) 700(B.y) V 0 H 0 Z"
        // d="m 0,700 q 480,300 960,0 V 0 H 0 Z"
        // M 0 493.5 Q 723.5 493.5300 1447 493.5 V 0 H 0 Z


    });

})