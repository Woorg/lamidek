module.exports = () => {

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

}
