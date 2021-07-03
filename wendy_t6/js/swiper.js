const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            direction: 'horizontal',
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 4,
        },
    },
})
