
$(document).ready(function(){
	if($(window).innerWidth() >= 1024){
        new WOW().init();
   	}
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height();
         if ($(window).scrollTop() > 1) {
             $('.header-pc').addClass('fixed-menu');
         }
         else {
             $('.header-pc').removeClass('fixed-menu');
         }
    });

    $('.clc-menu').click(function(e){
        e.preventDefault();
        $('.nav-menu').removeClass('active');
        var target = $($(this).attr('href'));
        if(target.length){
            var scrollTo = target.offset().top - 78;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
        }
        $('.clc-menu').removeClass("active");
        $(this).addClass("active");
    });

    $('.btn-bar a').click(function(e){
        e.preventDefault();
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

   	$('.slide-prd').slick({
        autoplay:false,
        arrow:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arr-left.png" alt=""></a>',
        nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arr-right.png" alt=""></a>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    });

   	$('.slide-solution').slick({
        autoplay:false,
        arrow:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arr-left.png" alt=""></a>',
        nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arr-right.png" alt=""></a>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
})

