$(document).foundation();

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});