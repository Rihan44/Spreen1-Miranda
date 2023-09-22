
let swipper_rooms_offers = document.querySelector('#swipper-rooms-offers');
let swiper_wrapper_rooms_offers = document.querySelector('.swiper-wrapper__rooms-offers');

function initSwiperRoomsOffers() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swipper_rooms_offers.classList.add('swiper');
        new Swiper('#swipper-rooms-offers', {
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

initSwiperRoomsOffers();

window.addEventListener('resize', () => {
    initSwiperRoomsOffers();
})

