$(document).ready(function() {
    
    $triggers = $('.section-grid__offer-nav-triggers');
    $content = $('.section-grid__offer-nav-tabs-content-2__items');
    $add_active = $('section-grid__offer-nav-tabs-content-2__items-active');
    $a_active = $('.active');
    
    //     $($triggers).click(function(e) {
    //         e.preventDefault();
    //         // alert($(this).attr('href'));
    //     $($content).removeClass('section-grid__offer-nav-tabs-content-2__items-active');
        
    //     $($(this).attr('href')).addClass('section-grid__offer-nav-tabs-content-2__items-active');
        
    //     $($(this) + 'a').addClass('active');

    // });
    
    // $('.section-grid__offer-nav-tabs-content-2__items:first').addClass('section-grid__offer-nav-tabs-content-2__items-active');
    
    
    $($triggers).click(function(e) {
        e.preventDefault();
        // alert($(this).attr('href'));
    $($content).removeClass('section-grid__offer-nav-tabs-content-2__items-active');
    $($triggers.children()).removeClass('active');
    
    $($(this).attr('href')).addClass('section-grid__offer-nav-tabs-content-2__items-active');
    
    $($(this).children()).addClass('active');

    // console.log($(this));
});

    $('.section-grid__offer-nav-triggers:first').children().click();

});