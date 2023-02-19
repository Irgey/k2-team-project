// $(document).ready(function () {
//   // Assign some jquery elements we'll need
//   var $swiper = $('.swiper-container');
//   var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
//   // into a fixed position for animation purposes
//   var $bottomSlideContent = null; // Slide content that gets passed between the
//   // panning slide stack and the position 'behind'
//   // the stack, needed for correct animation style

//   var mySwiper = new Swiper('.swiper-container', {
//     spaceBetween: 1,
//     slidesPerView: 3,
//     centeredSlides: true,
//     roundLengths: true,
//     loop: true,
//     loopAdditionalSlides: 30,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  var mySwiper = new Swiper('.swiper-container', {
    // spaceBetween: 8,
    // autoHeight: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    effect: 'creative',
    creativeEffect: {
      limitProgress: 10,
      prev: {
        scale: 0.9,
        translate: ['-100%', 0, 0],
      },
      next: {
        scale: 0.9,
        translate: ['100%', 0, 0],
      },
    },

    breakpoints: {
      // mobile
      320: {
        slidesPerView: 1.5,
      },
      // tablet - desktop
      1280: {
        slidesPerView: 3,
        scale: 1,
      },
    },

    loopAdditionalSlides: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
