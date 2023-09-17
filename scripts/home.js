import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';


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


const swiperFacilites = new Swiper('#swiper-facilities', {
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

let swiperMenu = new Swiper(".swiper-menu", {
    cssMode: true,

    navigation: {
        nextEl: ".swiper-menu-buttons__next",
        prevEl: ".swiper-menu-buttons__prev",
    },
});

const swiperImagesFood = new Swiper('.swiper-images-food-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },
    cssMode: true,

    pagination: {
        el: ".swiper-pagination-images-food",
        type: "bullets",
        clickable: true
    }

});