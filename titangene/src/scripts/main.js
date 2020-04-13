const bannerSwiper = new Swiper('.banner .swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.banner .swiper-button-next',
    prevEl: '.banner .swiper-button-prev'
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