import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);


const decorSlider = () => {

    const $decorSwiper = new Swiper('.js-decor-slider', {
        direction: 'horizontal',
        slidesPerView: 5,
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
            1100: {
                slidesPerView: 5,
            }
        }

    });

}



export default decorSlider;
