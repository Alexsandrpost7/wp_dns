$(document).ready(function() {
        // $('.tabs-triggers__item').click(function(e) {
        $('.tabs-triggers__item').hover(function(e) {
            e.preventDefault();

            // $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
            $('.tabs-content__item').removeClass('tabs-content__item--active');

            // $(this).addClass('tabs-triggers__item--active');
            // alert($(this).attr('href'));
            $($(this).attr('href')).addClass('tabs-content__item--active');
        }
        ,function(){
            // $($(this).attr('href') || $('tabs-content__item--active')).removeClass('tabs-content__item--active')
            // $(this).removeClass('tabs-content__item--active')
            alert('убрали мышь с эелемента')
        });
});