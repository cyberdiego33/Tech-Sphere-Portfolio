`use strict`;

document.querySelector('.nav-mobile').addEventListener("click", function () {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('h-0');
    menu.classList.toggle('p-2');
});

document.querySelector('.about-me').addEventListener("click", function () {
    const aboutMe = document.querySelector('.story');
    const sign = document.querySelector('.sign');
    aboutMe.classList.toggle('h-0');
    sign.textContent = '>'
});