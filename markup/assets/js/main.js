import svg4everybody from 'svg4everybody';
import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';


// import formValidator from  '../../blocks/form-validator/form-validator'


(() => {

    svg4everybody();

    // Nav

    const $navPrimary = $('.nav_primary .nav__trigger');
    $navPrimary.on('click', function() {
        $(this).parent().addClass('nav_active');
    });


    const $navClose = $('.nav__close');
    $navClose.on('click', function() {
       $(this).parent().removeClass('nav_active');

    });


    // Panels nav

    const $panelsNav = $('.panels-nav .panels-nav__trigger');
    $panelsNav.on('click', function() {
        $(this).parent().toggleClass('panels-nav_active');
    });


    // Hero slider


    Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);

    const $heroThumbs = $('.js-hero-thumbs');

    const $heroSwiper = new Swiper('.js-hero-slider', {
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


    if ($heroThumbs.length > 0) {

      const $heroSwiperThumbs = new Swiper('.js-hero-thumbs', {
        initialSlide: 0,
        slideToClickedSlide: true,
        updateOnWindowResize: true,
        roundLengths: true,
        lazy: true,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 4,
        },
        centeredSlides: true,
        touchRatio: 0.2,
        allowTouchMove: false,
        loop: false,
        touchRatio: 0.2,

        breakpoints: {
          0: {
          },
          1100: {
          }
        }

      });

      $heroSwiper.controller.control = $heroSwiperThumbs;
      $heroSwiperThumbs.controller.control = $heroSwiper;

    }




})();
