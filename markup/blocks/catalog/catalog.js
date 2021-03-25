const catalogFilter = () => {

    let $catalogFilterTrigger = $('.catalog__filter-trigger'),
        $catalogFilterClose   = $('.filter-panels__close');

    $catalogFilterTrigger.on('click', (e) => {
        e.preventDefault();

        const $catalogFilter = $('.catalog__filter');
        const $page = $('.page');

        $page.toggleClass('page_filter_active');
        $catalogFilter.toggleClass('catalog__filter_active');

    });

    $catalogFilterClose.on('click', (e) => {
        const $catalogFilter = $('.catalog__filter');
        const $page = $('.page');

        $page.removeClass('page_filter_active');
        $catalogFilter.removeClass('catalog__filter_active');

    });

}


export default catalogFilter;

