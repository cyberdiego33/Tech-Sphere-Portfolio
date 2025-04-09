`use strict`;

document.querySelector('.nav-mobile').addEventListener("click", function () {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('h-0');
    menu.classList.toggle('p-2');
});