document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".swiper", {
    spaceBetween: 30,

    centerSlides: 'true',
    fade: 'true',
    loop: true,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      375: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        centerSlides: 'true',
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 5,
      },
      1110: {
        slidesPerView: 2.1,
        spaceBetween: 5,
      },
      1440: {
        slidesPerView: 2.6,
        spaceBetween: 5,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
});
console.log(333);
