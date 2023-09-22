
let swiper_rooms_details = document.querySelector('#swiper-rooms-details');
let swiper_wrapper__rooms_details = document.querySelector('.swiper-wrapper__rooms-details');

function initSwiperRoomsDetails() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper_rooms_details.classList.add('swiper');
        new Swiper('#swiper-rooms-details', {
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

initSwiperRoomsDetails();

window.addEventListener('resize', () => {
    initSwiperRoomsDetails();
});

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
    console.error(error)
}


