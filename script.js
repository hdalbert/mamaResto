
// Awal Menu Hamburger

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');

menuToggle.addEventListener('click', function () {
    links.classList.toggle('slide');
})

// akhir Menu Hamburger