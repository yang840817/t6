let $search = $('.search');
let $navbar = $('.navbar');
let $navPrimary = $('.nav--primary');

$(window).scroll(function() {
  if ($('.nav--primary').offset().top <= $(window).scrollTop()) {
    $search.css('margin-left', 0).css('box-shadow', 'none');
    $navbar.css('box-shadow', 'none');
    $navPrimary.css('box-shadow', '1px 0 4px 0 rgba(0, 0, 0, 0.3)');
  } else {
    $search.removeAttr('style');
    $navbar.removeAttr('style');
    $navPrimary.removeAttr('style');
  }
});

const bannerSwiper = new Swiper('.banner .swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.banner .carousel_control-next',
    prevEl: '.banner .carousel_control-prev'
  }
});

const featureSwiper = new Swiper('.feature .swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.feature .carousel_control-next',
    prevEl: '.feature .carousel_control-prev'
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});