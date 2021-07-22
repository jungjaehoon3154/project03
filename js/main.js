$(document).ready(function(){

    /* slick */
    $('.img_slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });
    
    /* fade */
    $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop() + $(this).height() * 2/3; 

    $('.fade').each(function () {
        if (scrollY > $(this).offset().top) {
        $(this).addClass('on');
        } else { 
        $(this).removeClass('on');
        }
    });
    });

    $('.toggle').click(function() {
        $(this).toggleClass("active");
    $('.gnb_bg').toggleClass("active");
    });

    const all = $("#gnb ul li a")
    const home = $("#gnb .menu1 a")
    const project = $("#gnb .menu2 a")
    const about = $("#gnb .menu3 a")
    const contact = $("#gnb .menu4 a")
    const bg = $(".gnb_bg")

    all.click(function(){
        $(bg).removeClass("active");
        $('.toggle').removeClass("active");
    });
    home.mouseover(function(){
        $(bg).css("background","#233067")
    });
    home.mouseout(function(){
        $(bg).css("background","#000")
    });
    project.mouseover(function(){
        $(bg).css("background","#2f4f4f")
    });
    project.mouseout(function(){
        $(bg).css("background","#000")
    });
    about.mouseover(function(){
        $(bg).css("background","#6f4f28")
    });
    about.mouseout(function(){
        $(bg).css("background","#000")
    });
    contact.mouseover(function(){
        $(bg).css("background","#723838")
    });
    contact.mouseout(function(){
        $(bg).css("background","#000")
    });
      


});    
    