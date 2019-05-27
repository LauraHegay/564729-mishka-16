// Показ модального окна
var link = document.querySelector(".week-product__order");
var overlay = document.querySelector(".page-overlay");
var popup = document.querySelector(".page-modal");
var close = popup.querySelector(".button--close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("page-modal--show");
  overlay.classList.add("page-overlay--show");
});

close.addEventListener("click", function (evt) {
  // evt.preventDefault();
  popup.classList.remove("page-modal--show");
  overlay.classList.remove("page-overlay--show");
});

// открытие-закрытие меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
