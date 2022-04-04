//* Toggle menu mobile
const burguerMenu = document.querySelector('.burguer__menu');
const navMobile = document.querySelector('.nav__mobile__menu');

burguerMenu.addEventListener('click', () => {
  navMobile.style.right = 0;
});

//*Fechar
const closeMenu = document.querySelector('.close__menu');
const closenavMobile = document.querySelector('.nav__mobile__menu');

closeMenu.addEventListener('click', () => {
  closenavMobile.style.right = '-100%';
});

//*Default behaviour from submit button

const submitBtn = document.querySelector('.btn__form');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); //* for demo purposes
});

//*************SCROLL REVEALL **********/

const allRevealsHeader = [
  'nav',
  '.header__lead__wrapper',
  '.header__bottom__wrapper',
  '.img__header',
  '.services',
  '.contact',
  '.staff',
  '.blog',
  '.map',
];

for (i = 0; i < allRevealsHeader.length; i++) {
  ScrollReveal().reveal(allRevealsHeader[i], {
    delay: 400,
    easing: 'ease-in',
    duration: 600,
  });
}
//***********MATRIX CARD*********/
$(document).ready(function () {
  $('.square').mousemove(function (e) {
    var offset = $(this).offset();
    var relX = e.pageX - offset.left;
    var relY = e.pageY - offset.top;
    var offsetMinX = $(this).width();
    var offsetMinY = $(this).height();
    var currentX = (relX += offsetMinX * -0.5);
    var currentY = (relY += offsetMinY * -0.5);
    var newX = currentX / 500000;
    var newY = currentY / 1000000;
    $(this).css(
      'transform',
      'matrix3d(1.025,0,0,' + -newX + ',0,1.025,0,' + -newY + ',0,0,1,0,0,0,0,1)'
    );
  });
  $('.square').mouseout(function () {
    $(this).css('transform', 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)');
  });
});
