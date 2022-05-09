const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // speed: 400,
  // spaceBetween: 100,

  // Navigation arrows
  navigation: {
    nextEl: '.next__button',
    prevEl: '.prev__button',
  },

  // Default parameters
  // slidesPerView: 4,
  // spaceBetween: 0,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    576: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 5
    }
  }


});
