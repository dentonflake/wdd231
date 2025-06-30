
const burgerBtn = document.getElementById('burger');
const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');

let menuOpen = false;

burgerBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    // Toggle the menu visibility
    menu.classList.toggle('show');

    // Swap icon
    if (menuOpen) {
        burgerIcon.src = './images/close.png'; // your "X" icon
        burgerIcon.alt = 'close menu';
    } else {
        burgerIcon.src = './images/burger.png';
        burgerIcon.alt = 'open menu';
    }
});