// I can't attribute this code since I don't remember where I got it from it may have come from the theme I used in https://fstire.com

const initApp = () => {

    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
const elementsWithClass = document.querySelectorAll('.card');

Array.from(elementsWithClass).forEach(element => {
    element.addEventListener('click', function () {
        Array.from(elementsWithClass).forEach(function (el) {
            el.classList.remove('card--featured');
        });
        element.classList.add('card--featured');
    });
});

document.addEventListener('DOMContentLoaded', initApp)