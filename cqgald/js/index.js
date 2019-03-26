$(document).ready(function() {


    // var homekey = 0.35;
    // var teamkey = 0.42;
    // var workkey = 0.58;
    // var contactkey = 0.65;

    // TweenMax.to(".navHome", 1, { attr: { keyPoints: homekey + ";" + homekey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });
    // TweenMax.to(".navTeam", 1, { attr: { keyPoints: teamkey + ";" + teamkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    // TweenMax.to(".navWork", 1, { attr: { keyPoints: workkey + ";" + workkey }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    // TweenMax.to(".navContact", 1, { attr: { keyPoints: contactkey + ";" + contactkey }, ease: Elastic.easeOut.config(0.6, 0.3), y: -500 });






    (function($) {

        $.fn.unveil = function(threshold, callback) {
      
          var $w = $(window),
              th = threshold || 0,
              retina = window.devicePixelRatio > 1,
              attrib = retina? "data-src-retina" : "data-src",
              images = this,
              loaded;
      
          this.one("unveil", function() {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute("data-src");
            if (source) {
              this.setAttribute("src", source);
              if (typeof callback === "function") callback.call(this);
            }
          });
      
          function unveil() {
            var inview = images.filter(function() {
              var $e = $(this);
              if ($e.is(":hidden")) return;
      
              var wt = $w.scrollTop(),
                  wb = wt + $w.height(),
                  et = $e.offset().top,
                  eb = et + $e.height();
      
              return eb >= wt - th && et <= wb + th;
            });
      
            loaded = inview.trigger("unveil");
            images = images.not(loaded);
          }
      
          $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
      
          unveil();
      
          return this;
      
        };
      
      })(window.jQuery || window.Zepto);








})