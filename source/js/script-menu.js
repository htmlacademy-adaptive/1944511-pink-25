let menu = document.querySelector('.main-header');
let btnToogle = document.querySelector('.main-header__button-toogle');

menu.classList.remove('main-header--no-js');

btnToogle.addEventListener('click', function () {
  console.log(1);
  if (menu.classList.contains('main-header--menu-active')) {
    menu.classList.remove('main-header--menu-active');
  } else {
    menu.classList.add('main-header--menu-active');
  }
});
