/* variables */
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

let burguer_icon = document.getElementById('burguer__icon');
let img_icon = document.getElementById('img_icon');
let nav_menu = document.getElementById('nav_menu');
let check_menu = true;

img_icon.src = '../img/burguer_icon.png';

burguer_icon.addEventListener('click', () => {
    if (check_menu) {
        nav_menu.style.top = '85px';
        nav_menu.style.transition = '0.5s';
        nav_menu.style.paddingBottom = '15px';
        img_icon.src = '../img/close_icon.png';
        check_menu = false;
    } else {
        nav_menu.style.top = '-150px';
        nav_menu.style.transition = '0.5s';
        img_icon.src = '../img/burguer_icon.png';
        check_menu = true;
    }
});

/* slider */
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

const swiperCounter = new Swiper('#swiper-counter', {
    direction: 'horizontal',

    cssMode: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }

});

