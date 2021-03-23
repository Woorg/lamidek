import Swiper, {Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay} from 'swiper';
Swiper.use([Pagination, Navigation, Controller, EffectFade, Lazy, Scrollbar, Thumbs, Autoplay]);

const firstSlider = () => {

    const $firstBubble = $('.first__bubble');

    if ($firstBubble.length > 0) {

      const breakpoint = window.matchMedia( '(min-width:1200px)' );

      let firstBubbleSwiper;

      const breakpointChecker = function() {
         if ( breakpoint.matches === true ) {
            // if ( firstBubbleSwiper !== undefined ) firstBubbleSwiper.destroy( true, true );
            return;
         } else if ( breakpoint.matches === false ) {
            return enableSwiper();
         }
      };
      const enableSwiper = function() {
         firstBubbleSwiper = new Swiper ('.first__bubble .swiper-container', {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            watchOverflow: true,
            parallax: true,
            navigation: {
                nextEl: '.first__bubble-nav .slider__button_next',
                prevEl: '.first__bubble-nav .slider__button_prev',
            },
         });
      };
      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    }

    const $bubbleClose =  $('.first__bubble-close');

    $bubbleClose.on('click', function() {
      $(this).parent().removeClass('first__bubble_active');
    });

    const $schemeMarker = $('.first__scheme-button');

    $schemeMarker.on('click', function() {
      $(this).parent().siblings().removeClass('first__scheme-marker_active');
      $(this).parent().siblings().removeClass('first__bubble_active');

      $(this).parent().toggleClass('first__scheme-marker_active');
      $(this).parent().next().toggleClass('first__bubble_active');
    });

}

export default firstSlider;
