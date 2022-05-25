let menu = document.querySelector('.main-header');
let btnToogle = document.querySelector('.main-header__button-toogle');
let map = document.querySelector('.map');

menu.classList.remove('main-header--no-js');
map.classList.remove('map--no-js');

btnToogle.addEventListener('click', function () {
  if (menu.classList.contains('main-header--menu-active')) {
    menu.classList.remove('main-header--menu-active');
  } else {
    menu.classList.add('main-header--menu-active');
  }
});
