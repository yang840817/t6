const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      direction: "horizontal",
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 4,
    },
  },
});
// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   slidesPerGroup: 4,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper_button_next",
//     prevEl: ".swiper_button_prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       slidesPerGroup: 2,
//     },
//     576: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       slidesPerGroup: 3,
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//       slidesPerGroup: 1,
//     },
//   },
// });
