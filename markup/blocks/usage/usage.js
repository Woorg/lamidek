import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);


const usageSlider = () => {

    let $usageSliders = $('.js-usage-slider');

    $usageSliders.each(function() {

        let $slides = $(this);

        let usageSlider = new Swiper('.js-usage-slider', {
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: false,

            navigation: {
                nextEl: '.slider__button_next',
                prevEl: '.slider__button_prev',
            },

            pagination: {
                el: '.slider__pagination',
                type: 'bullets',
            },


        });

    });


}


export default usageSlider;
