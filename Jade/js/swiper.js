const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.next__button',
    prevEl: '.prev__button',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }


});
