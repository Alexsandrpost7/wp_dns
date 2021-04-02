$(document).ready(function() {

    // $('body').scrolltop(10);
    // alert('sdasdffds');


    // $(window).scrollTop(function(){
    //     alert('прокрутили 50px');
    // });
    
    // $(window).scroll(function() {
        
    //     var target = $(this).scrollTop();
        
    //     if(target == 250) {
            

    //             console.log($(this));
    //             // alert('прокрутили 50px');
                
                
    //             // Действие, если страница в самом верху
                
    //         } else {
                
    //             // alert('прокрутили 50px');
    //         // Действие, если страница прокручена вниз
    
    //     }
    
    // });


    // function consoleBG() {
    //     if ($('.section-header__nav').scrollTop() == 200) {
    //       $('.section-grid__sale').css('background-color', 'blue');
    //     } else {
    //       $('.section-grid__sale').css('background-color', 'red');
    //     }
    //   }

    //   consoleBG();

    // $block = $('.section-header-bckr');
       // $block = $('.div-1');
    // $btn = $('.section-header__nav-text');// книпка вверху ВОЙТИ
        // $btn = $('.btn_scroll');// книпка внизу тест

    // $($btn).click(function(){

    //     var s = $(window).scrollTop();
    //     console.log("scrollTop = " + s);

    // });
    

    // $(window).scrollTop(function(){

    //     if ($(window).scrollTop() > 1) {
    //     // if ($('.section-header__nav').position().top > 33) {
    //         $('.section-header__nav').css("background-color", "blue");
    //     }

    //         // console.log($('.section-header__nav').position().top)
    // })



    var block_show = null;
 
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.section-header-bckr').offset().top;
	var eh = $('.section-header-bckr').outerHeight();
 
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
            $('.section-header__nav').css("position", "").css("top", "33px");
			console.log('Блок active в области видимости');
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			console.log('Блок active скрыт');
            $('.section-header__nav').css("position", "fixed").css("top", "0px");

		}
		block_show = false;
	}
}
 
        $(window).scroll(function(){
            scrollTracking();
        });
            
        $(document).ready(function(){ 
            scrollTracking();
    
});
})