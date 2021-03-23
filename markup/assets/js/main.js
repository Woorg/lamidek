import svg4everybody from 'svg4everybody';

import nav from '../../blocks/nav/nav';
import {pageNavSticky, pageNavMob} from '../../blocks/page-nav/page-nav';
import heroSlider from '../../blocks/hero/hero';
import firstSlider from '../../blocks/first/first';

import objectsSlider from '../../blocks/objects/objects';
import decorSlider from '../../blocks/decor/decor';
import usageSlider from '../../blocks/usage/usage';
import tabs from '../../blocks/tabs/tabs';
import {certificatesGallery, certificatesSlider} from '../../blocks/certificates/certificates';



(function ($) {

    svg4everybody();

    let styles = [
      'padding: 2px 9px',
      'background: #1b1e64',
      'color: #fff',
      'display: inline-block',
      'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
      'line-height: 1.52',
      'text-align: left',
      'font-size: 14px',
      'font-weight: 400'
    ].join(';');

    console.log('%c developed by igor gorlov https://gorlov.gq', styles);

    // Nav

    nav();

    // Page nav sticky

    pageNavSticky();

    // Page nav mob

    pageNavMob();

    // Hero slider

    heroSlider();

    // Objects slider

    objectsSlider();

    // Decor slider

    decorSlider()

    // Usage slider

    usageSlider();

    // First slider

    firstSlider();

    // Certificates slider

    certificatesSlider();


    // Animate To bottom

    $('.js-to-go').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      if(target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });


    // Tabs

    tabs();


    // Certificates gallery

    certificatesGallery();


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
      '28',
      '30',



    ]);



})(jQuery);
