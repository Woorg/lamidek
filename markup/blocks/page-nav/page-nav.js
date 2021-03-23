const pageNavSticky = () => {

    if ($('.page-nav').length > 0) {

        let $pageNavTop = $('.page-nav').offset().top;

        $(window).scroll(function() {
            let $windowTop = $(window).scrollTop() - 0;
            if ($windowTop > $pageNavTop) {
                if (!$('.page-nav').is('.page-nav_sticky')) {
                    $('.page-nav').addClass('page-nav_sticky ');
                }
            } else {
                $('.page-nav').removeClass('page-nav_sticky ');
            }
        });

    }


}


const pageNavMob = () => {

    var headers = $('.section-header');

    // Do initializing things on each header
    headers.each(function(){
      var el = $(this);

      // save original position and height
      el.data({
        'original-pos': el.offset().top,
        'height': el.outerHeight()
      });

      // wrap headers to hold header height
      // in document flow when it is position: fixed
      el.wrap('<div class="header-wrap"></div>');
      el.parent().css('height', el.data('height'));
    });

    $(window).on('scroll', function(){

      var scrollPos = $(window).scrollTop();

      headers.each(function(i){
        var thisHeader = $(this),
            nextHeader = headers.eq(i+1),
            prevHeader = headers.eq(i-1),
            thisHeaderPos = thisHeader.data('original-pos');

        if( thisHeaderPos <= scrollPos ) {

          thisHeader.addClass('sticky');

          if( nextHeader.length && thisHeader.offset().top >= nextHeader.data('original-pos') - thisHeader.data('height') ) {
            thisHeader
              .addClass('collide')
              .css( 'top', nextHeader.data('original-pos') - thisHeader.data('height') );
          }

        } else {

          thisHeader.removeClass('sticky');

                              if( prevHeader.length && scrollPos <= thisHeader.data('original-pos')  - prevHeader.data('height') ) {
                                    prevHeader
              .removeClass('collide')
              .removeAttr('style');
                              }

        }

      });

    });


}





export {
  pageNavSticky,
  pageNavMob
}
