
let swipper_rooms_offers = document.querySelector('#swipper-rooms-offers');
let swiper_wrapper_rooms_offers = document.querySelector('.swiper-wrapper__rooms-offers');
let btn_book = document.getElementsByClassName('luxury-rooms-offers-container__button');

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

for (let index = 0; index < btn_book.length; index++) {
    btn_book[index].addEventListener('click', () => {
        window.location.href = '../pages/rooms.html';
    });
    
}
