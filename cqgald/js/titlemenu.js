var titleItem = ""

// var po = document.createElement('script')

var pages = document.querySelectorAll(".page")



var titleDatas = [ "服务领域", "设计项目", "设计流程", "设计团队", "联系我们" ]

pages.forEach(function (ele, index, arr) {

    if (index > 0) {
        var titleMenus = document.createElement("div")
        titleMenus.className = "titleMenus"
        ele.prepend(titleMenus)

        var titleItems = document.createElement("div")
        titleItems.className = "titleItems"
        titleMenus.append(titleItems)


        // CREAT DATA
        titleDatas.forEach(function (titleData, index, arr) {

            var titleItem = document.createElement("div")
            titleItem.className = "titleItem"
            titleItems.append(titleItem)

            var titleItemH1 = document.createElement("h1")
            titleItemH1.className = "titleItemH1"
            titleItemH1.innerHTML = titleData
            titleItem.append(titleItemH1)

            titleItem.addEventListener("click", function () {
                console.log(titleData)
    
            }, false);
    
        })

    }

})







$(document).ready(function () {

    // var titleItem = ""

    // $(".page").not(".galdhome").each(function (index) {

    //     var ci = $(this).children().children().length
    //     console.log("children: " + ci)


    //     $(".titleItem")[0].click(function () {
    //         console.log("one")
    //         $('#galdserver').ScrollTo({
    //             duration: 1000,
    //             easing: 'linear'
    //         });
    //     })
    
    //     $(".titleItem")[2].click(function () {
    //         $('#galdwork').ScrollTo({
    //             duration: 1000,
    //             easing: 'linear'
    //         });
    //     })
    
    
    
    //     $(".titleItem")[3].click(function () {
    //         $('#galdworkflow').ScrollTo({
    //             duration: 1000,
    //             easing: 'linear'
    //         });
    //     })
    
    
    //     $(".titleItem")[4].click(function () {
    //         $('#galdteam').ScrollTo({
    //             duration: 1000,
    //             easing: 'linear'
    //         });
    //     })
    
    
    
    //     $(".titleItem")[5].click(function () {
    //         $('#galdcontact').ScrollTo({
    //             duration: 1000,
    //             easing: 'linear'
    //         });
    //     })
    

    // });




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