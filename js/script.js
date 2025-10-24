// product-swiper//

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  slideToscroll: 4,
  spaceBetween: 37,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

// product-swiper-two//

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  slideToscroll: 4,
  spaceBetween: 67,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

// beauti-journal-swiper//

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  slideToscroll: 4,
  spaceBetween: 67,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

// testimonial-swiper//

const swiper4 = new Swiper(".testimonialSwiper", {
  slidesPerView: 5,
  spaceBetween: 55,
  centeredSlides: true,
  loop: true,

autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 
});

// banner-btm-swiper//

const swiper5 = new Swiper(".swiper5", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 5,
  slideToscroll: 5,
  spaceBetween: 0,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
   

    992: {
      slidesPerView: 3,
        spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
       spaceBetween: 0,
    },

    576: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

const swiper6 = new Swiper(".swiper6", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  slideToscroll: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
   

    992: {
      slidesPerView: 2,
        
    },

    768: {
      slidesPerView: 2,
       spaceBetween: 0,
    },

    576: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

AOS.init();
