$(document).ready(function () {
   // Бургер меню
   var menuBtn = $('.menu__icon');
   var menu = $('.menu__body');

   menuBtn.on('click', function (event) {
      menu.toggleClass('menu__body_active');
      menuBtn.toggleClass('menu__icon_active');
   });

   $('.catalog-header__head').on('click', function () {
      $('.catalog-header__list').toggleClass('catalog-header__list_active')
   })

   // Swiper
   new Swiper('.slider', {
      // Стрелки
      navigation: {
         nextEl: '.slider-arrow__next',
         prevEl: '.slider-arrow__prev'
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 15,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         991: {
            slidesPerView: 2,
            spaceBetween: 72,
         },
      }
   });

   svg4everybody();
});