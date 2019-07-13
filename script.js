
$( document ).on( 'scroll', function () {
    $navbar = $(".navbar")
    if ( $( document ).scrollTop() > 583 ) {
        $navbar.addClass( 'navbar-bg-fixed' );
    } else {
        $navbar.removeClass( 'navbar-bg-fixed' );
    }
} );