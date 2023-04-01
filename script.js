function  toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
    console.log('Funcionaa')
}

const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');
var index = 0; 
function nextSlider() {
    slides[index].classList.remove('active'); 
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}   
// index = (index + 1) % slides.length;
// Esta línea de código actualiza la variable index, que indica qué diapositiva se mostrará a continuación. En este caso, se incrementa en 1 y se utiliza el operador de módulo (%) para asegurarse de que el índice permanezca dentro de los límites del número total de diapositivas.

function prevtSlider() {
    slides[index].classList.remove('active'); 
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}  

const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div')

var i = 0;
function nextSlideText() {
    slidesText[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add('active')
}
function prevSlideText() {
    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active')
}