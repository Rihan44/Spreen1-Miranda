
let swiper__facilities_about = document.querySelector('.swiper-facilities-about-us');
let swiper__wrapper_about = document.querySelector('.swiper-wrapper-about-us');

let swiper_counter = document.querySelector('#swiper-counter');
let swiper_wrapper_counter = document.querySelector('.swiper-wrapper__counter');

function initSwiperAbout() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper__facilities_about.classList.add('swiper');
        new Swiper('#swiper-facilities-about-us', {
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

initSwiperAbout();

function initSwiperCounter() {
    if (window.matchMedia("(max-width: 1000px").matches) {
        swiper_counter.classList.add('swiper');
        new Swiper('#swiper-counter', {
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

initSwiperCounter();

window.addEventListener('resize', () => {

    initSwiperAbout();
    initSwiperCounter();

})