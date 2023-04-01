function  toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
    console.log('Funcionaa')
}

const slideShow = document.getElementById('slideShow');
const slides = document.getElementsByTagName('slideShow')
