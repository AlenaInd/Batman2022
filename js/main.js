const swiper = new Swiper('.main-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});
