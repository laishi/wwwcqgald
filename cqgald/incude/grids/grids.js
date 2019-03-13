$(document).ready(function() {




    var grid = $(".grid")


    var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();

    var tl = new TimelineMax();
    tl.stop();




    var scrollTop = 0;


    var gridWidth
    var gridHeight

    var gridX
    var gridY

    var centerX
    var centerY

    var currentGrid
    var prevGrid
    var nextGrid



    var scrolling = 1




    var indexImg = 0
    var imgs = []

    var navImg = 0
    var currentImg = 0

    $(".gridImg").each(function(index, element) {
        imgs.push($(this).attr("src"))

    });

    grid.click(function(item) {

        currentGrid = $(this)
        navImg = $(this).index()
        currentImg = $(this).index()



        scrollTop = $(window).scrollTop();

        prevGrid = $(this).prevAll();
        nextGrid = $(this).nextAll();



        if ($(this).hasClass("gridActiv")) {

            $(this).find(".gridImg").attr("src", imgs[currentImg])



            console.log("gridClick: " + imgs[currentImg])

            TweenMax.to($(this), 0.3, { scaleX: 1, scaleY: 1, x: "-=" + centerX, y: "-=" + centerY, ease: Power4.easeOut })


            moveUp(nextGrid)
            moveDown(prevGrid)



            $(this).toggleClass("gridActiv");

            $(".gridCloseBtn").toggleClass("gridActiv");

            TweenMax.to($(this).find("h1"), 0.3, { fontSize: 18 + "px" })



        } else {




            gridWidth = $(this).width()
            gridHeight = $(this).height()

            var scaleWidth = 720 / gridWidth


            gridX = $(this).offset().left
            gridY = $(this).offset().top

            centerX = windowWidth / 2 - gridX - gridWidth / 2;
            centerY = scrollTop + windowHeight / 2 - gridY - gridHeight / 2;


            TweenMax.to($(this), 0.3, { scale: scaleWidth, x: "+=" + centerX, y: "+=" + centerY, ease: Power2.easeIn })

            TweenMax.to($(this).find("h1"), 0.3, { fontSize: 18 / scaleWidth + "px" })

            TweenMax.set($(this), { backgroundColor: "#39296b" })

            moveUp(prevGrid)
            moveDown(nextGrid)



            // TweenMax.to($(this), 0.3, { scale: 2 })

            $(this).toggleClass("gridActiv");
            scrolling = 1

            var gridCloseBtn = " <div class='gridCloseBtn'></div> "
            $(this).append(gridCloseBtn);


        }
    });



    var expandImg = $(".gridActiv").find(".gridImg")

    $(".preBtn").click(function() {

        TweenMax.to($(".gridActiv").find(".gridImg"), 0.3, { x: -gridWidth, opacite: 0, ease: Power3.easeIn, onComplete: slideLeft })

    });

    $(".nextBtn").click(function() {
        TweenMax.to($(".gridActiv").find(".gridImg"), 0.3, { x: +gridWidth, opacite: 0, ease: Power3.easeIn, onComplete: slideRight })

    });


    function slideLeft() {
        navImg += 1

        if (navImg > imgs.length - 1) {
            navImg = 0
        }
        $(".gridActiv").find(".gridImg").attr("src", imgs[navImg])
        TweenMax.fromTo($(".gridActiv").find(".gridImg"), 0.3, { x: gridWidth, opacite: 0, }, { x: 0, scale: 1, opacite: 1, ease: Power3.easeOut })
    }

    function slideRight() {
        navImg -= 1

        if (navImg < 0) {
            navImg = imgs.length
        }
        $(".gridActiv").find(".gridImg").attr("src", imgs[navImg])
        TweenMax.fromTo($(".gridActiv").find(".gridImg"), 0.3, { x: -gridWidth, opacite: 0, }, { x: 0, scale: 1, opacite: 1, ease: Power3.easeIn })
    }










    $(window).scroll(function() {
        var windowScrollPos = $(window).scrollTop();

        if (scrollTop != windowScrollPos && grid.hasClass("gridActiv") && scrolling) {
            TweenMax.to($(".gridActiv"), 0.3, { scaleX: 1, scaleY: 1, x: "-=" + centerX, y: "-=" + centerY, ease: Power4.easeOut })
            moveUp(nextGrid)
            moveDown(prevGrid)

            $(".gridActiv").find(".gridImg").attr("src", imgs[currentImg])

            scrolling = 0
            currentGrid.toggleClass("gridActiv");
        }



    });



    function moveUp(item) {
        TweenMax.staggerTo(item, 0.3, { y: "-=" + window.innerHeight }, 0.02)
    }

    function moveDown(item) {
        TweenMax.staggerTo(item, 0.3, { y: "+=" + window.innerHeight }, 0.02)
    }

    function gridScale(item) {

    }



















});