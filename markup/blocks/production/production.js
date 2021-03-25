import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);

const productionSlider = () => {

    let $productionSwiper = new Swiper('.js-production-slider-1', {
        direction: 'horizontal',
        preloadImages: false,
        // lazy: true,
        loop: false,
        // loopedSlides: 1,

        navigation: {
            nextEl: '.slider__button_next',
            prevEl: '.slider__button_prev',
        },

        pagination: {
            el: '.slider__pagination',
            type: 'bullets',
        },

    });

}


const productionImageSlider = () => {

    let $productionImageSwiper = new Swiper('.js-production-slider-2', {
        direction: 'horizontal',
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

    });

}


export {
    productionSlider,
    productionImageSlider
}

