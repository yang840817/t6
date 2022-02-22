// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});