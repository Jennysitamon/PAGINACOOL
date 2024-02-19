document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');
    const intelligentLamp = document.querySelector('#inicio .titles');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Agrega la clase 'animate' cuando se carga la página
    document.body.onload = function () {
        intelligentLamp.classList.add('animate');
        const intelligent = document.querySelector('#inicio .intelligent');
        const lamp = document.querySelector('#inicio .lamp');
        intelligent.classList.add('animate');
        lamp.classList.add('animate');
    };
});
