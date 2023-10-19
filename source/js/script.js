document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".main-swiper", {
    spaceBetween: 30,
    effect: "cards",
    grabCursor: true,
    centerSlides: 'true',
    fade: 'true',
    breakpoints: {
      1920: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".main-content-right__swipe-right",
      prevEl: ".main-content-right__swipe-left",
    },
  });
});
// console.log(333);

const mainBurger = document.querySelector('.main-burger');
if(mainBurger){
  const mainBurgerMenu = document.querySelector('.main-burger-menu');
  const closeBurgerMenu = document.querySelector('.main-burger-menu__close-img');
  mainBurger.addEventListener("click", function(e) {
    document.body.classList.toggle('lock');
    mainBurger.classList.toggle('active');
    mainBurgerMenu.classList.toggle('active');
  });
  closeBurgerMenu.addEventListener("click", function(e) {
    mainBurgerMenu.classList.toggle('active');
    mainBurger.classList.toggle('active');
    mainBurgerMenu.classList.toggle('remove');
    mainBurgerMenu.classList.toggle('remove');
    document.body.classList.toggle('lock');
  }); 
}

document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".productions-swiper", {
    spaceBetween: 0,
    centerSlides: 'true',
    fade: 'true',
    loop: true,
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      // 1919: {
      //   slidesPerView: 3.5,
      //   spaceBetween: 0,
      // },
    },
  });
});