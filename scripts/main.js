/* variables */

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
        nav_menu.style.top = '-200px';
        nav_menu.style.transition = '0.5s';
        img_icon.src = '../img/burguer_icon.png';
        check_menu = true;
    }
});


/* SWIPER HOME */

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

/* SWIPER ABOUT US */

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

/* ROOMS */
const swiper = new Swiper('#swipper-rooms-roomspage', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  


/* SWIPER ROOMS DETAILS */
const swiperRoomsDetails = new Swiper('#swipper-rooms-details', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    navigation: {
        nextEl: '#swiper-button-next-rooms-details',
        prevEl: '#swiper-button-prev-rooms-details',
    }

});

/* OFFERS */
const swiperRoomsOffers = new Swiper('#swipper-rooms-offers', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    navigation: {
        nextEl: '#swiper-button-next-rooms-offers',
        prevEl: '#swiper-button-prev-rooms-offers',
    }

});

/* TODO HACER MODAL ROOM DETAILS */
let buttonCheck = document.getElementById('room-details-type-availability-form__button');
let formCheck = document.getElementById('room-details-type-availability__form');
let modalCheck = document.querySelector('.modal-rooms-details');
let buttonCloseModal = document.getElementById('modal-rooms-details__button-close');

formCheck.addEventListener('submit', (e) => e.preventDefault());

buttonCheck.addEventListener('click', () => {
    modalCheck.style.display = 'flex';
});

buttonCloseModal.addEventListener('click', () => {
    modalCheck.style.display = 'none';
});