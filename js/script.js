(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
      $('.nav-span').removeClass('nav-link-color');
      $('.logo-1').addClass('hide');
      $('.logo-2').removeClass('hide');
      $('.talk-button').addClass('btn-primary');
      $('.nav__background').removeClass('nav__background__dark');
      $('.nav__background').addClass('nav__background__light');
      // $('.ham').removeClass('menu__color__light');
      // $('.ham').addClass('menu__color__dark');
      // $('.logo').removeClass('logo_bg_black');
      // $('.logo').addClass('logo_bg_white');
      

    } else {
      $('.navigation').removeClass('nav-bg');
      $('.nav-span').addClass('nav-link-color');
      $('.talk-button').removeClass('btn-primary');
      $('.logo-1').removeClass('hide');
      $('.logo-2').addClass('hide');
      $('.nav__background').removeClass('nav__background__light');
      $('.nav__background').addClass('nav__background__dark');
      // $('.ham').addClass('menu__color__light');
      // $('.ham').removeClass('menu__color__dark');
      // $('.logo').addClass('logo_bg_black');
      // $('.logo').removeClass('logo_bg_white');
    }
  });

  // team slider
  $('.team-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // about video popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // animation scroll js
  var html_body = $('html, body');
  $('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1));
      } + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

})(jQuery);





// scroll effects scripts
    window.sr = ScrollReveal();
              sr.reveal('.reveal-fast', {
                duration: 1500,
                origin: 'top',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-s', {
                duration: 1500,
                origin: 'top',
                delay:1000,
                reset: true
              })
              sr.reveal('.slide-down', {
                duration: 1500,
                origin: 'top',
                distance: '2rem',
                reset: true
              })
              sr.reveal('.slide-down-slow', {
                duration: 1000,
                origin: 'top',
                delay: 1500,
                distance: '2rem',
                reset: true
              })
              sr.reveal('.slide-up', {
                duration: 1500,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-right', {
                duration: 1500,
                origin: 'left',
                distance: '2rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-left', {
                duration: 1500,
                origin: 'right',
                distance: '8rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-left-2', {
                duration: 1500,
                origin: 'right',
                distance: '4rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-left-3', {
                duration: 1500,
                origin: 'right',
                distance: '2rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-left-4', {
                duration: 1500,
                origin: 'right',
                distance: '1rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-slow', {
                duration: 1500,
                origin: 'right',
                delay: 500,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-slower', {
                duration: 1500,
                origin: 'right',
                delay: 1000,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-slowest', {
                duration: 1500,
                origin: 'right',
                delay: 1500,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-ultra-slow', {
                duration: 2000,
                origin: 'right',
                delay: 2500,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-name', {
                duration: 1500,
                origin: 'right',
                delay: 2400+500,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-illustration', {
                duration: 1500,
                origin: 'left',
                distance: '0rem',
                delay: 2400,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.reveal-home-card', {
                duration: 1500,
                origin: 'right',
                delay: 2400+1500,
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-down-checkout', {
                duration: 1000,
                origin: 'top',
                delay: 2400+1800,
                distance: '2rem',
                reset: true
              })
/***********************slide-project2**********************/
              sr.reveal('.slide-down-pro', {
                duration: 1500,
                origin: 'top',
                distance: '10rem',
                viewFactor: 0.2,
                reset: true
              })
              sr.reveal('.slide-up-pro', {
                duration: 1500,
                origin: 'bottom',
                distance: '10rem',
                viewFactor: 0.2,
                reset: true
              })

              sr.reveal('.slide-up-nav-1', {
                duration: 1500,
                origin: 'bottom',
                distance: '8rem',
                viewFactor: 0.2,
                reset: true
              })

              sr.reveal('.slide-up-nav-2', {
                duration: 1500,
                origin: 'bottom',
                distance: '8rem',
                viewFactor: 0.2,
                delay: 200,
                reset: true
              })
              sr.reveal('.slide-up-nav-3', {
                duration: 1500,
                origin: 'bottom',
                distance: '8rem',
                viewFactor: 0.2,
                delay: 400,
                reset: true
              })
              sr.reveal('.slide-up-nav-4', {
                duration: 1500,
                origin: 'bottom',
                distance: '8rem',
                viewFactor: 0.2,
                delay: 600,
                reset: true
              })





// .....................floating btn.........................................
$(document).ready(function() {
  $('.go-top').hide(0)
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.go-top').fadeIn(200);      
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function() {
    event.preventDefault();
    
    $('html , body').animate({scrollTop: 0}, 1000);
  });
});
