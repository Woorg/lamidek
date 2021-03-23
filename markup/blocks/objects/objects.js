import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);


const objectsSlider = () => {

    const $objectsSwiper = new Swiper('.js-objects-slider', {
      direction: 'horizontal',
      slidesPerView: 3,
      preloadImages: false,
      lazy: true,
      loop: false,
      loopedSlides: 1,

      navigation: {
          nextEl: '.slider__button_next',
          prevEl: '.slider__button_prev',
      },

      pagination: {
          el: '.slider__pagination',
          type: 'bullets',
      },

      breakpoints: {
          0: {
            slidesPerView: 1,
          },
          1100: {
            slidesPerView: 3,
          }
        }


    });


}


export default objectsSlider;
