import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiperFacilitesAboutUs = new Swiper('#swiper-facilities-about-us', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }

});



const swiperCounter = new Swiper('#swiper-counter', {
    direction: 'horizontal',

    cssMode: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }

});