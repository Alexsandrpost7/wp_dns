
$(document).ready(function() {

    $top_menu = $('.section-grid__menu-wr-items');
    $down_menu = $('.menu-dropdown-items')
    // $class_active = $('.section-grid__menu-wr-a-active');
    $class_active = $('.menu-dropdown--active');

    
    // $('.section-grid__menu-wr-items').hover(function(e) {
    $($top_menu).hover(function(e) {
        e.preventDefault();

        $('.section-grid__menu-wr-items').removeClass('menu-dropdown--active');
        // $($down_menu).removeClass($class_active);


// alert ($(this).attr('href'));

        // $($(this).attr('href')).addClass($class_active);
        // $($(this).attr('href')).addClass('section-grid__menu-wr-a-active');
        $($(this).attr('href')).addClass('menu-dropdown--active');
            
    }
    ,function() {
        // $($(this).attr('href') || $('.section-grid__menu-wr-a-active')).removeClass('section-grid__menu-wr-a-active')
        // $($(this).attr('href') || $('.menu-dropdown--active').removeClass('menu-dropdown--active')
     
        $($(this).attr('href') || $($class_active)).removeClass('menu-dropdown--active')
    }
    );

});