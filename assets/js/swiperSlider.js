const swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        786: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }

});