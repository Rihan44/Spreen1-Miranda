
let form_contact = document.querySelector('#form_contact');

form_contact.addEventListener('submit', (e) => {
    let paragraph__enviado = document.querySelector('#paragraph__enviado');
    e.preventDefault();

    paragraph__enviado.style.opacity = '1';
    paragraph__enviado.style.color = 'rgba(119, 119, 119, 1)';

    setTimeout(() => {
        location.reload();
    }, 400);
});

// Rellena al menos un campo para poder enviar el formulario