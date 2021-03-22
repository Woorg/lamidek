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
       $(this).parent().parent().removeClass('nav_active');

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


    const $firstBubble = $('.first__bubble');

    if ($firstBubble.length > 0) {

      // breakpoint where swiper will be destroyed
      // and switches to a dual-column layout
      const breakpoint = window.matchMedia( '(min-width:640px)' );
      // keep track of swiper instances to destroy later
      let firstBubbleSwiper;
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      const breakpointChecker = function() {
         // if larger viewport and multi-row layout needed
         if ( breakpoint.matches === true ) {
            // clean up old instances and inline styles when available
            if ( firstBubbleSwiper !== undefined ) firstBubbleSwiper.destroy( true, true );
            // or/and do nothing
            return;
         // else if a small viewport and single column layout needed
         } else if ( breakpoint.matches === false ) {
            // fire small viewport version of swiper
            return enableSwiper();
         }
      };
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      const enableSwiper = function() {
         firstBubbleSwiper = new Swiper ('.first__bubble .swiper-container', {
            direction: 'horizontal',
            slidesPerView: 1,
            freeMode: false,
            effect: 'fade',
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            // pagination
            navigation: {
                nextEl: '.first__bubble-nav .slider__button_next',
                prevEl: '.first__bubble-nav .slider__button_prev',
            },
         });
      };
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      // keep an eye on viewport size changes
      breakpoint.addListener(breakpointChecker);
      // kickstart
      breakpointChecker();

    }



    const $bubbleClose =  $('.first__bubble-close');

    $bubbleClose.on('click', function() {
      $(this).parent().removeClass('first__bubble_active');
    });

    const $schemeMarker = $('.first__scheme-button');

    $schemeMarker.on('click', function() {
      $(this).parent().siblings().removeClass('first__scheme-marker_active');
      $(this).parent().toggleClass('first__scheme-marker_active');
      $(this).parent().next().toggleClass('first__bubble_active');
    });


    // Animate To bottom


    $('.js-to-bottom').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      if(target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });


    // List pages

    function pageWidget(pages) {
      var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
      widgetWrap.prependTo("body");
      for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
      }
      var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
      widgetStilization.prependTo(".widget_wrap");
    }


    pageWidget([
      'index',
      '25',


    ]);



})();
