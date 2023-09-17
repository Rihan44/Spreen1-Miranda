import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiperRoom = new Swiper('#swiper-room', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    navigation: {
        nextEl: '.swiper-room-button-next',
        prevEl: '.swiper-button-prev',
    },

 /*    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    } */

});

const swiperRooms = new Swiper('#swipper-rooms', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    navigation: {
        nextEl: '#swiper-button-next-rooms',
        prevEl: '#swiper-button-prev-rooms',
    }

});
