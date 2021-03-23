import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);


const certificatesSlider = () => {

    const $certificatesSwiper = new Swiper('.js-certificates-slider', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 17,
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
            640: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
        }

    });

}


const certificatesGallery = () => {

    let $certificatesImage = $('.certificates__slider-link');

    if ($certificatesImage.length > 0) {

      $certificatesImage.magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

    }

}




export {
    certificatesGallery,
    certificatesSlider
}
