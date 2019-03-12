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

    grid.click(function(item) {

        currentGrid = $(this)


        scrollTop = $(window).scrollTop();

        prevGrid = $(this).prevAll();
        nextGrid = $(this).nextAll();



        if ($(this).hasClass("gridActiv")) {

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

            console.log("scaleWidth: " + scaleWidth)

            gridX = $(this).offset().left
            gridY = $(this).offset().top

            centerX = windowWidth / 2 - gridX - gridWidth / 2;
            centerY = scrollTop + windowHeight / 2 - gridY - gridHeight / 2;

            console.log("clickscrollPos: " + scrollTop)

            TweenMax.to($(this), 0.3, { scale: scaleWidth, x: "+=" + centerX, y: "+=" + centerY, ease: Power2.easeIn })

            TweenMax.to($(this).find("h1"), 0.3, { fontSize: 18 / scaleWidth + "px" })
            console.log("text: " + $(this).children("h1").text())

            TweenMax.set($(this), { backgroundColor: "#39296b" })

            moveUp(prevGrid)
            moveDown(nextGrid)


            console.log("offset(): " + $(this).offset().top)
            console.log("index: " + grid.index(grid))

            // TweenMax.to($(this), 0.3, { scale: 2 })

            $(this).toggleClass("gridActiv");
            scrolling = 1

            var gridCloseBtn = " <div class='gridCloseBtn'></div> "
            $(this).append(gridCloseBtn);


        }
    });




    $(window).scroll(function() {
        var windowScrollPos = $(window).scrollTop();

        if (scrollTop != windowScrollPos && grid.hasClass("gridActiv") && scrolling) {
            TweenMax.to($(".gridActiv"), 0.3, { scaleX: 1, scaleY: 1, x: "-=" + centerX, y: "-=" + centerY, ease: Power4.easeOut })
            console.log("test scroll ")
            moveUp(nextGrid)
            moveDown(prevGrid)

            scrolling = 0
            currentGrid.toggleClass("gridActiv");
        }


        console.log("myscrollPos: " + windowScrollPos)
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