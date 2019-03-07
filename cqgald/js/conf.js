$(function () {

    var navCicle = $(".navCicle")


    $.scrollify({
        section: ".page",
        //sectionName:false,
        // scrollSpeed: 1100,
        before:function(i, item) {

            function toret(params) {
                TweenMax.to(navCicle, 0.3, {"borderRadius": "0%", "width":"100%"})
            }
            if (i === 1) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos, "width":"100px", "borderRadius": "50%", onComplete:toret})
            }

            if (i === 2) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos,"width":"100px", "borderRadius": "50%", onComplete:toret})
            }

            if (i === 3) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos,"width":"100px", "borderRadius": "50%", onComplete:toret})
            }

            if (i === 4) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos,"width":"100px", "borderRadius": "50%", onComplete:toret})
            }

            if (i === 5) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos,"width":"100px", "borderRadius": "50%", onComplete:toret})
            }

            if (i === 6) {
                var ciclePos = item[i].offset().top
                TweenMax.set(navCicle, {"top": 0,})
                TweenMax.to(navCicle, 0.8, {"top": ciclePos,"width":"100px", "borderRadius": "50%", onComplete:toret})
            }
        },

        after: function (i, item) {



        }
    });

    // $(".scroll,.scroll-btn").click(function(e) {
    //     e.preventDefault();

    //     $.scrollify.next();



    // });


    // var hasHovered = false;
    // $(".coffee").on("mouseenter focus", function() {
    //     if (hasHovered === false) {
    //         ga('send', 'event', 'Coffee', 'hover', 'Buy me a coffee');
    //         hasHovered = true;
    //     }
    // });

});