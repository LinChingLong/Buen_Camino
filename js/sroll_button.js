// Scroll_button
$(function(){

    $('.bt01').click(function(){
        $('html,body').animate({scrollTop:$('.about_top').offset().top}, 600);
    });

    $('.bt02').click(function(){
        $('html,body').animate({scrollTop:$('.about_middle').offset().top}, 600);
    });

    $('.bt03').click(function(){
        $('html,body').animate({scrollTop:$('.about_bottom').offset().top}, 600);
    });

    $('.bt04').click(function(){
        $('html,body').animate({scrollTop:$('.about_where').offset().top}, 600);
    });
});