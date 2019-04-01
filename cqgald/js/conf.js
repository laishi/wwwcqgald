$(function () {




// $(".page").not(".galdhome").children().css("display", "none");








    var curentPage
    var pageTitle
    var curentPageTitle

    $.scrollify({
        section: ".page",
        //sectionName:false,
        // scrollSpeed: 1100,




        before: function (i, item) {
            if (i > 0) {
                curentPage = item[i]
                pageTitle = curentPage.find(".titleItem")
                TweenMax.to(pageTitle, 0.3, { scale: 0 });

                TweenMax.to(pageTitle, 0.3, { scale: 1 });
            }

            // $(".pageCont").css("display", "block");

        },

        after: function (i, item) {

            if (i > 0) {
                curentPage = item[i]
                pageTitle = curentPage.find(".titleItem")
                TweenMax.to(pageTitle, 0.3, { scale: 0 });

                curentPageTitle = pageTitle[i - 1]
                TweenMax.to(curentPageTitle, 0.3, { scale: 1 });



                $(".titleMenus").hover(over, out);

                function over() {
                    // event.stopPropagation();
                    TweenMax.to(pageTitle, 0.3, { scale: 0.8, alpha: 0.8});
                    TweenMax.to(curentPageTitle, 0.3, { scale: 1, alpha: 1.0});
                }
            
                function out() { 
                    TweenMax.to(pageTitle, 0.3, { scale: 0 });
                    TweenMax.to(curentPageTitle, 0.3, { scale: 1 });
                }


            }



            if (i === 1) {

            }

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