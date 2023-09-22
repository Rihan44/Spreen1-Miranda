
let swiper__facilities = document.querySelector('.swiper__facilities');
let swiper__wrapper = document.querySelector('.swiper-wrapper__facilities');

function initSwiperRooms() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        new Swiper('#swipper-rooms', {
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
        new Swiper('#swipper-rooms', {
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

function initSwiperFacilities() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper__facilities.classList.add('swiper');
        new Swiper('#swiper__facilities', {
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

initSwiperFacilities();

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

window.addEventListener('resize', () => {
    initSwiperRooms();
    initSwiperFacilities();
})