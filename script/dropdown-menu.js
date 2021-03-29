
$(document).ready(function() {

    $top_menu = $('.section-grid__menu-wr-items');
    $down_menu = $('.section-grid__menu-wr-a-active')
    $class_active = $('.active_menu');
    $cnt = 0;

    // $('.section-grid__menu-wr-items').hover(function () {
    // $top_menu.hover(function () {
        // alert( "Handler for .click() called." ); 
        //  +ok $('.section-grid__menu-wr-items-dropdown').css('background-color' , 'red');
        
        // $('.section-grid__menu-wr-items-dropdown').css('display' , 'block');

    // });
    
    // if ($cnt = 1) {
        // $('.section-grid__menu-wr-items').hover(function() {
        $($top_menu).hover(function() {

            // if ($cnt == 1) {

            //     $($down_menu).addClass('active_menu');

            // }
            //     $($down_menu).removeClass('active_menu');
            //     $(this).addClass('active_menu');
            // $('.section-grid__menu-wr-items').addClass('.active_menu');

             $(this).toggleClass('active_menu');



        });
        
    // };



});