$(document).ready(function ($) {
  'use strict';


  /* ---------------------------------------------
      dropdown submenu 
       --------------------------------------------- */
       $('.navbar .dropdown-item').click(function (e) {
        e.stopPropagation();
      }); // toggle to show/hide dropdown submenus on click
  
      $('.navbar-collapse').on('show.bs.collapse', function () {
        $(this).closest('.navbar').addClass('navbar-toggled');
      });
      $('.navbar-collapse').on('hide.bs.collapse', function () {
        $(this).closest('.navbar').removeClass('navbar-toggled');
      });
 
      var $dropdowns = $('.navbar .dropdown');
      $dropdowns.each(function (index, item) {
        var $item = $(this);
        $item.hover(function () {
          $item.find("> .dropdown-toggle").attr("aria-expanded", true);
          $item.find("> .dropdown-menu").addClass("show");
        }, function () {
          $item.find("> .dropdown-toggle").attr("aria-expanded", false);
          $item.find("> .dropdown-menu").removeClass("show");
        });
      });
  /* ---------------------------------------------
      Sticky header
      --------------------------------------------- */
  $(window).on('scroll', function () {
    var scroll_top = $(window).scrollTop();

    if (scroll_top > 40) {
      $('.navbar').addClass('sticky');

    }
    else {
      $('.navbar').removeClass('sticky');
    }

  });


  /* ---------------------------------------------
     page  Prealoader
     --------------------------------------------- */
     $(window).on('load', function () {
      $("#loading-center-page").fadeOut();
      $("#loading-page").delay(400).fadeOut("slow");
  });




  /*--------------------
  Slick  JS
  ----------------------*/
 
  $('.slider-interface-inner').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 1,
    rows: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    centerMode: true,
    margin: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
 

  $('.testmonials-block').slick({
    dots: true,
    padding: 0,
    slidesPerRow: 1,
    rows: 1,
    arrows: false,
    centerMode: true,
    margin: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
 
 


  /* ---------------------------------------------
   Back top page scroll up
   --------------------------------------------- */


  $.scrollUp({
    scrollText: '<i class=" uil uil-arrow-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });
 


    /* ---------------------------------------------
  Navbar
   --------------------------------------------- */

  $(".navbar-collapse").on("show.bs.collapse",
  function(){$(this).closest(".navbar").addClass("navbar-toggled")});
  $(".navbar-collapse").on("hide.bs.collapse",
  function(){$(this).closest(".navbar").removeClass("navbar-toggled")});
$("header .navbar .navbar-nav .section-scroll").on('click', function (event) {
   event.preventDefault();
   $(this).closest("#navbar-collapse").removeClass("show");
});
 
  /* ---------------------------------------------
   Smooth scroll
   --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
   // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }

  });


  // scroll animation - start
  // --------------------------------------------------
  AOS.init({
     once: true,
    duration: 800,
  });
  // scroll animation - end
  // --------------------------------------------------


/*----------------------------------------------------*/
/*  VIDEO POP PUP
/*----------------------------------------------------*/

$('.video-modal').magnificPopup({
  type: 'iframe',

  iframe: {
    patterns: {
      youtube: {

        index: 'youtube.com',
        src: 'https://www.youtube.com/embed/mc8u7W8Ft-Q'

      }
    }
  }
});

  /*----------------------------------------
   Newsletter Subscribe
   --------------------------------------*/

  $(".subscribe-mail").ajaxChimp({
    callback: mailchimpCallRep,
    url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
  });

  function mailchimpCallRep(resp) {
    if (resp.result === "success") {
      $(".sucess-message").html(resp.msg).fadeIn(1000);
      $(".error-message").fadeOut(500);
    } else if (resp.result === "error") {
      $(".error-message").html(resp.msg).fadeIn(1000);
    }
  }
 
   /*----------------------------------------
  pricing table 
   --------------------------------------*/
 
   var $switcher = $('[data-toggle="switch-prices"]'),
   $prices = $(".switch-price");
$switcher.change(function () {
 var yearly = $(this).is(":checked");
 var period = yearly ? "switch-price-yearly" : "switch-price-monthly";
 $prices.removeClass("switch-price-active");
 $prices.filter("." + period + "").addClass("switch-price-active");
});
});