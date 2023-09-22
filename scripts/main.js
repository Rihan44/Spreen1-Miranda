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




