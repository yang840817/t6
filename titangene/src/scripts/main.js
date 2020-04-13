var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const featureSwiper = new Swiper('.feature .swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.feature .swiper-button-next',
    prevEl: '.feature .swiper-button-prev'
  }
});