$(document).ready(function(){

    /* slick
    $('.img_slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });
     */

    /* fade */
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop() + $(this).height() * 2/3; 
        const scrollTop = $(this).scrollTop(); 

        $('.fade').each(function () {
            if (scrollY > $(this).offset().top) {
            $(this).addClass('on');
            } else { 
            $(this).removeClass('on');
            }
        });

        // 텍스트 한글자씩 처리하기 위해 h1.logo에 .on 제어
        if (scrollTop >= 0 && scrollTop <= $(this).height()) $('.logo').addClass('on');
        else $('.logo').removeClass('on');
    });
    $(window).trigger('scroll');

    // 메뉴 열기
    $('#header .toggle').on('click', function () {
        $(this).toggleClass('active').next().toggleClass('active');

        $('#header .toggle').on('keydown', function (e) {
            if (e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                $("#gnb ul li:last a").focus();
            }
        });
        $("#gnb ul li:last a").on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                $('#header .toggle').focus();
            }
        });
   });

    $("#gnb ul li a").on({
        'mouseenter focus': function () {
            const bgNum = $(this).parent().index();
            $('#header .gnb_bg').addClass('bg'+bgNum);
        },
        'mouseleave blur': function () {
            $('#header .gnb_bg').removeClass('bg0 bg1 bg2 bg3');
        },
        click: function (e) {
            e.preventDefault();
            $('#header .toggle').removeClass('active').next().removeClass('active');
            const $tg =  $($(this).attr('href'));
            $('html, body').stop().animate({scrollTop: $tg.offset().top});
        }
    });

    // 텍스트 한글자씩 처리
    const $logo = $('.logo');
    let wordArray = $logo.html().split(' ');
    // console.log(wordArray);
    let tagWrite = '';
    for (let i = 0; i < wordArray.length; i++) {
      $logo.html(''); //기존 태그 우선 지우기
      if (wordArray[i] === '<br>') {
        tagWrite += '<br>';
       } else {
        let spanArray = wordArray[i].split(''); //한글자씩 잘라서 배열에 저장
        // console.log(spanArray);
        // 반복문을 통해 각 div 부모 안에 막내 자식으로 span 동적생성
        tagWrite += '<div class="word">';
        for (let j = 0; j < spanArray.length; j++) {
          tagWrite += `<span class="up">${spanArray[j]}</span>`;
        }
        tagWrite += '</div>';
      }
      $logo.append(tagWrite);
    }

    // delay 시간 지정
    $('.logo .word .up').each(function (idx) {
        $(this).css('animationDelay', (idx * 0.04) + 0.4 + 's');
    });

    //마우스오버 효과
   
    $(".list1").mouseenter(function(){
        $(".show1").addClass("show");
    });
    $(".list1").mouseleave(function(){
        $(".show1").removeClass("show");
    });
    $(".list2").mouseenter(function(){
        $(".show2").addClass("show");
        $(".show1").css("opacity", "0");
    });
    $(".list2").mouseleave(function(){
        $(".show2").removeClass("show");
        $(".show1").css("opacity", "1");
    });
    $(".list3").mouseenter(function(){
        $(".show3").addClass("show");
        $(".show1").css("opacity", "0");
    });
    $(".list3").mouseleave(function(){
        $(".show3").removeClass("show");
        $(".show1").css("opacity", "1");
    });
    $(".list4").mouseenter(function(){
        $(".show4").addClass("show");
        $(".show1").css("opacity", "0");
    });
    $(".list4").mouseleave(function(){
        $(".show4").removeClass("show");
        $(".show1").css("opacity", "1");
    });

    //텍스트 가로로 움직이기
    $(window).scroll(function(){
    const wScroll = $(this).scrollTop();
        
    const offset1 = (wScroll - $(".mov1").offset().top) * 0.5;
    const offset2 = (wScroll - $(".mov2").offset().top) * -0.1;
    const offset3 = (wScroll - $(".mov3").offset().top) * 0.4;
    const offset4 = (wScroll - $(".mov4").offset().top) * -0.3;
    
    $(".mov1").css({"transform":"translateX(" + offset1 +"px)"});
    $(".mov2").css({"transform":"translateX(" + offset2 +"px)"});
    $(".mov3").css({"transform":"translateX(" + offset3 +"px)"});
    $(".mov4").css({"transform":"translateX(" + offset4 +"px)"});

    }); 




});  
 