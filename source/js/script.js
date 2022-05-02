let menu = document.querySelector('.main-header');
let btnOpen = document.querySelector('.main-header__button-open');
let btnClose = document.querySelector('.main-header__button-close');

menu.classList.remove('main-header--no-js');

btnOpen.addEventListener('click', function () {
  if (menu.classList.contains('main-header--active')) {
    return;
  } else {
    menu.classList.add('main-header--active');
  }
});

btnClose.addEventListener('click', function () {
  menu.classList.remove('main-header--active');
});
