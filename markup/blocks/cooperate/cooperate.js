import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);


const cooperateSlider = () => {

    const $cooperateSwiper = new Swiper('.js-cooperate-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
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

        // breakpoints: {
        //     0: {
        //         slidesPerView: 1,
        //     },
        //     640: {
        //         slidesPerView: 2,
        //     },
        //     800: {
        //         slidesPerView: 3,
        //     },
        // }

    });

}


export default cooperateSlider;
