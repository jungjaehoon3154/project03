$(document).ready(function(){

    $('.toggle').click(function(){
        $(this).toggleClass('active');
     });

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

    
    
   

});