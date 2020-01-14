(function ($) {
  "use strict";

  var review = $('.review_part_text');
  if (review.length) {
    review.owlCarousel({
      items: 2,
      loop: true,
      dots: true,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout:5000,
      nav: false,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 2
        }
    }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }

  // page-scroll
  $('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    var headerH = '80';
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
 });


  /* ========================================================================= */
  /*  Back to Top
  /* ========================================================================= */
  
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo");
    });

}(jQuery));
/* ========================================================================= */
/*  Preloader
/* ========================================================================= */

jQuery(window).load(function(){

  $("#preloader").fadeOut("slow");

});


$(document).ready(function(){

  /* ========================================================================= */
  /*  Menu item highlighting
  /* ========================================================================= */

  jQuery('#nav').singlePageNav({
    offset: jQuery('#nav').outerHeight(),
    filter: ':not(.external)',
    speed: 1200,
    currentClass: 'current',
    easing: 'easeInOutExpo',
    updateHash: true,
    beforeStart: function() {
      console.log('begin scrolling');
    },
    onComplete: function() {
      console.log('done scrolling');
    }
  });
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#0EB493");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
  
  /* ========================================================================= */
  /*  Fix Slider Height
  /* ========================================================================= */ 

  var slideHeight = $(window).height();
  
  $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

  $(window).resize(function(){'use strict',
    $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
  });
  
  /* ========================================================================= */
  /*  Parallax
  /* ========================================================================= */ 
  

  $('.facts').parallax("50%", 0.3);
  
  /* ========================================================================= */
  /*  Timer count
  /* ========================================================================= */

  "use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

  
});


// ========== END GOOGLE MAP ========== //