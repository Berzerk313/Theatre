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
console.log(333);
