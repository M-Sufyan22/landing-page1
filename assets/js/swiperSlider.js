const swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        270: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        786: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }

});

// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });