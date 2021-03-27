
const contactMapShow = () => {


    let $mapShowButton = $('.contact__entry-button');

    $mapShowButton.on('click', function (e) {
        e.preventDefault();
        $(this).parent().next().toggleClass('contact__col_map_hidden');
    });

    let $mapContainer = $('.contact__col');

    // contact__col_map_hidden

    // console.log($(document).width());

    if ($(document).width() < 800 ) {
        $mapContainer.addClass('contact__col_map_hidden');
    }

}





export default contactMapShow;
