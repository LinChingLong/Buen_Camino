var images = ["photo_mian_bn01.jpg" , "photo_main_bn02.jpg", "photo_main_bn03.jpg"];

$(function () {
    var i = 0;
    $("header").css("background-image", "url(./img/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("header").fadeOut("slow", function () {
            $(this).css("background-image", "url(./img/" + images[i] + ")");
            $(this).fadeIn("slow");
        });

        if (i == 0){
            
            $('.dot1').addClass("dotonclick").siblings().removeClass("dotonclick");
        }else if (i == 1){
        $('.dot2').addClass("dotonclick").siblings().removeClass("dotonclick");
        }else{
        $('.dot3').addClass("dotonclick").siblings().removeClass("dotonclick");
        }
    }, 5000);
    
});

$('.dot').on('click', function(){
    $(this).addClass("dotonclick").siblings().removeClass("dotonclick")
});

$('.dot1').on('click', function(){
    $("header").css("background-image", "url(./img/" + images[0] + ")");
})

$('.dot2').on('click', function(){
    $("header").css("background-image", "url(./img/" + images[1] + ")");
})

$('.dot3').on('click', function(){
    $("header").css("background-image", "url(./img/" + images[2] + ")");
})

// function showButton(){
//     dot.classList.toggle("dotonclick");
    // dot[0].classList.remove("dotonclick");
    // dot[0].classList.add("dotonclick");



