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

    var viewbox = function (windowW, windowH) {

        svgHeight = parseInt(curveBg.getAttribute("d").split(" ")[2]);
        radianHeight = 300
        resizeRadianHeight = radianHeight * (windowW / windowH / 2)
        svgRadian = resizeRadianHeight + svgHeight

        var viewboxSize = "0 0 " + windowW + " " + windowH
        var resizeSvg = "M 0 " + svgHeight + " Q " + windowW / 2 + " " + svgRadian + " " + windowW + " " + svgHeight + " V 0 H 0 Z"

        var resizeNavCurve = resizeSvg.split("V")[0]

        svgCurve.setAttribute('viewBox', viewboxSize)
        curveBg.setAttribute("d", resizeSvg);
        navCurve.setAttribute("d", resizeNavCurve);

        console.log("windowW: " + windowW)

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


    $(".headerText").css("marginTop", 500)


    // INIT CLIPIMAGE








    var navHome = document.getElementById('navHome')
    var navServer = document.getElementById('navServer')
    var navWork = document.getElementById('navWork')
    var navFlow = document.getElementById('navFlow')
    var navTeam = document.getElementById('navTeam')




    var menuItem = $(".menuItem")

    var pathLength = Math.floor(navCurve.getTotalLength());

    menuToCurve(pathLength)

    function menuToCurve(pathLength) {
        $(".menuItem").each(function (index, element) {

            var menuPos = (index + 3) * 10;

            prcnt = (menuPos * pathLength) / 100;
            pt = navCurve.getPointAtLength(prcnt);
            pt.x = Math.round(pt.x);
            pt.y = Math.round(pt.y);

            $(this).css("webkitTransform", 'translate3d(' + pt.x + 'px,' + pt.y + 'px, 0)');

        })

    }



























    var homekey = 0.35;
    var teamkey = 0.42;
    var workkey = 0.58;
    var contactkey = 0.65;




    


    TweenMax.to(".navHome", 1, { attr: { keyPoints: homekey + ";" + homekey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });
    TweenMax.to(".navTeam", 1, { attr: { keyPoints: teamkey + ";" + teamkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.to(".navWork", 1, { attr: { keyPoints: workkey + ";" + workkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.to(".navContact", 1, { attr: { keyPoints: contactkey + ";" + contactkey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });







    function scrollEvent(scrollPos) {

        var scrollRate = scrollPos / 1718;
        var homepos = Math.max(homekey - scrollRate, 0);
        var teamkpos = Math.max(teamkey - scrollRate / 2, 0);
        var workpos = Math.min(workkey + scrollRate / 2, 1);
        var contactpos = Math.min(contactkey + scrollRate, 1);

        // logopos = $(".galdCicle").offset().top + 30
        logopos = 380


        var minPos = Math.min(logopos, scrollPos);
        TweenMax.to($(".headerImg"), 1, { y: minPos });




        $(".navHome").attr("keyPoints", homepos + ";" + homepos);
        $(".navTeam").attr("keyPoints", teamkpos + ";" + teamkpos);
        $(".navWork").attr("keyPoints", workpos + ";" + workpos);
        $(".navContact").attr("keyPoints", contactpos + ";" + contactpos);





        if (scrollPos >= 0 && scrollPos < window.innerHeight) {




            curveValue = svgRadian - parseFloat(scrollPos * curveRate);



            var svgBgD = "M 0 " + svgHeight + " Q " + windowW / 2 + " " + curveValue + " " + windowW + " " + svgHeight + " V 0 H 0 Z"
            var svgnavD = svgBgD.split("V")[0]




            curveBg.setAttribute("d", svgBgD);
            navCurve.setAttribute("d", svgnavD);







            pathLength = Math.floor(navCurve.getTotalLength());

            menuToCurve(pathLength)


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





        var pathLength = Math.floor(navCurve.getTotalLength());






        pathLength = Math.floor(navCurve.getTotalLength());

        menuToCurve(pathLength)









        // d="M 0(A.x) 700(A.y) Q 960(ABhandle.X) 1000(ABhandle.y) 1920(BC.X) 700(B.y) V 0 H 0 Z"
        // d="m 0,700 q 480,300 960,0 V 0 H 0 Z"
        // M 0 493.5 Q 723.5 493.5300 1447 493.5 V 0 H 0 Z


    });












})