/* variables */

let burguer_icon = document.getElementById('burguer__icon');
let img_icon = document.getElementById('img_icon');
let nav_menu = document.getElementById('nav_menu');
let check_menu = true;


img_icon.src = '../img/burguer_icon.png';

/* HEADER MOVIL */

burguer_icon.addEventListener('click', () => {
    if (check_menu) {
        nav_menu.style.top = '85px';
        nav_menu.style.transition = '0.5s';
        nav_menu.style.paddingBottom = '15px';
        img_icon.src = '../img/close_icon.png';
        check_menu = false;
    } else {
        nav_menu.style.top = '-250px';
        nav_menu.style.transition = '0.5s';
        img_icon.src = '../img/burguer_icon.png';
        check_menu = true;
    }
});

/* HEADER DESKTOP */

let scree_width = screen.width;

if (scree_width > 1000) {
    let header_desktop = document.querySelector('.header__boxgeneral');
    let header = document.querySelector('.header');

    function porcentajeTotal() {
        let altura_pantalla = window.scrollY;
        let alturaTotal_pantalla = document.documentElement.scrollHeight - window.innerHeight;
        let porcentajeTotal = (altura_pantalla / alturaTotal_pantalla) * 100;
        return Math.floor(porcentajeTotal);
    }

    window.addEventListener('mousemove', (e) => {
        const mouse = e.clientY;

        if (mouse === 0) {
            header_desktop.style.top = '36px';
            header_desktop.style.transition = '0.5s';
            header.style.position = 'fixed';
        }
    });

    window.addEventListener('scroll', () => {
        let porcentaje = porcentajeTotal();

        if (porcentaje > 0) {
            header_desktop.style.top = '-250px';
            header_desktop.style.transition = '0.5s';
            header.style.position = 'absolute';
        } else if (porcentaje === 0) {
            header_desktop.style.top = '36px';
            header_desktop.style.transition = '0.5s';
            header.style.position = 'fixed';
        }

    });
}

/* SWIPER HOME */
function initSwiperRooms() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        let swiperRooms = new Swiper('#swipper-rooms', {
            keyboard: true,
            loop: true,
            autoplay: {
                delay: 3000
            },
            cssMode: true,
            navigation: {
                nextEl: '#swiper-button-next-rooms',
                prevEl: '#swiper-button-prev-rooms',
            }
        });
    } else {
        let swiperRooms = new Swiper('#swipper-rooms', {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 50,
            loop: true,
            navigation: {
                nextEl: '#swiper-button-next-rooms',
                prevEl: '#swiper-button-prev-rooms',
            }
        });
    }
}

initSwiperRooms();

let swiper__facilities = document.querySelector('.swiper__facilities');
let swiper__wrapper = document.querySelector('.swiper-wrapper__facilities');

function initSwiperFacilities() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper__facilities.classList.add('swiper');
        let swiperFacilites = new Swiper('#swiper__facilities', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: "#facilities-bullets-pagination",
                type: "bullets",
                clickable: true
            }
        
        });
    } else {
        swiper__facilities.classList.remove("swiper");
        swiper__wrapper.classList.remove("swiper-wrapper");
    }

}

if(swiper__facilities != null) {
    initSwiperFacilities();
}


let swiperMenu = new Swiper(".swiper-menu", {
    cssMode: true,

    navigation: {
        nextEl: ".swiper-menu-buttons__next",
        prevEl: ".swiper-menu-buttons__prev",
    },
});

let swiperImagesFood = new Swiper('.swiper-images-food-slider', {
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

let swiper__facilities_about = document.querySelector('.swiper-facilities-about-us');
let swiper__wrapper_about = document.querySelector('.swiper-wrapper-about-us');

function initSwiperAbout() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper__facilities_about.classList.add('swiper');
        let swiperFacilitesAboutUs = new Swiper('#swiper-facilities-about-us', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: "#facilities-about-us-bullets-pagination",
                type: "bullets",
                clickable: true
            }
        
        });
    } else {
        swiper__facilities_about.classList.remove("swiper");
        swiper__wrapper_about.classList.remove("swiper-wrapper");
    }

}

if(swiper__facilities_about != null){  
    initSwiperAbout();
}


let swiper_counter = document.querySelector('#swiper-counter');
let swiper_wrapper_counter = document.querySelector('.swiper-wrapper__counter');

function initSwiperCounter() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper_counter.classList.add('swiper');
        let swiperCounter = new Swiper('#swiper-counter', {
            direction: 'horizontal',
        
            cssMode: true,
        
            pagination: {
                el: "#swiper-pagination-counter",
                type: "bullets",
                clickable: true
            }
        
        });
    } else {
        swiper_counter.classList.remove("swiper");
        swiper_wrapper_counter.classList.remove("swiper-wrapper");
    }

} 

if(swiper_counter != null){
    initSwiperCounter();
}

/* SWIPER ROOMS DETAILS */
 
let swiper_rooms_details = document.querySelector('#swiper-rooms-details');
let swiper_wrapper__rooms_details = document.querySelector('.swiper-wrapper__rooms-details');

function initSwiperRoomsDetails() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper_rooms_details.classList.add('swiper');
        let swiperRoomsDetails = new Swiper('#swiper-rooms-details', {
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
    } else {
        swiper_rooms_details.classList.remove("swiper");
        swiper_wrapper__rooms_details.classList.remove("swiper-wrapper");
    }

}

if(swiper_rooms_details != null){
    initSwiperRoomsDetails();
}

/* OFFERS */

let swipper_rooms_offers = document.querySelector('#swipper-rooms-offers');
let swiper_wrapper_rooms_offers = document.querySelector('.swiper-wrapper__rooms-offers');

function initSwiperRoomsOffers() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swipper_rooms_offers.classList.add('swiper');
        let swiperRoomsOffers = new Swiper('#swipper-rooms-offers', {
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
    } else {
        swipper_rooms_offers.classList.remove("swiper");
        swiper_wrapper_rooms_offers.classList.remove("swiper-wrapper");
    }

}

if(swipper_rooms_offers != null){
    initSwiperRoomsOffers();
}

window.addEventListener('resize', () => {
    /* TODO HACER LO DEL NULL */
    initSwiperRooms();
    initSwiperFacilities();
    initSwiperAbout();
    initSwiperCounter();
    initSwiperRoomsDetails();
    initSwiperRoomsOffers();
})


/* CHECK ROOMS */

try {
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
} catch (error) {
    console.log('no estás en la página de rooms details')
}

