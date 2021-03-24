
const contactMapShow = () => {


    let $mapShowButton = $('.contact__entry-button');

    $mapShowButton.on('click', function (e) {
        e.preventDefault();
        $(this).parent().next().toggleClass('contact__col_map_hidden');
    });

}


export default contactMapShow;
