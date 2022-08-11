
$(document).ready(function(){
	if($(window).innerWidth() >= 1024){
        new WOW().init();
   	}
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height();
         if ($(window).scrollTop() > 1) {
             $('.header-pc, main').addClass('fix-menu'); 
         }
         else {
             $('.header-pc, main').removeClass('fix-menu');
         }
    });
   	$('.slide-banner').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // fade: true,
    });

   	$('.slide-thumb-video').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true, 
        asNavFor: '.slide-nav-video',
    });
   	$('.slide-nav-video').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.slide-thumb-video',
        focusOnSelect: true,

    }); 

    var slideWrapper = $(".slide-thumb-solution"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

    // POST commands to YouTube or Vimeo API
    function postMessageToPlayer(player, command){
      if (player == null || command == null) return;
      player.contentWindow.postMessage(JSON.stringify(command), "*");
    }

    // When the slide is changing
    function playPauseVideo(slick, control){
      var currentSlide, slideType, startTime, player, video;

      currentSlide = slick.find(".slick-current");
      slideType = currentSlide.attr("class").split(" ")[1];
      player = currentSlide.find("iframe").get(0);
      startTime = currentSlide.data("video-start");
      if (slideType === "video") {
          video = currentSlide.children("video").get(0);
          if (video != null) {
            if (control === "play"){
              video.play();
            } else {
              video.pause();
            }
          }
        }
    }

    // DOM Ready
    $(function() {
      // Initialize
      slideWrapper.on("init", function(slick){
        slick = $(slick.currentTarget);
        playPauseVideo(slick,"play");
      });
      slideWrapper.on("beforeChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"pause");
      });
      slideWrapper.on("afterChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"play");
      });
      slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
        lazyCounter++;
        if (lazyCounter === lazyImages.length){
          lazyImages.addClass('show');
        }
      });

      //start the slider
      slideWrapper.slick({
        autoplay:false,
        fade:true,
        autoplaySpeed:7000,
        speed:600,
        arrows:false,
        dots:true,
        asNavFor: '.slide-nav-solution',
      });
    });
   	$('.slide-nav-solution').slick({
        autoplay:false,
        autoplaySpeed:7000,
        arrow:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.slide-thumb-solution',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: { 
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            { 
                breakpoint: 575, 
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],

    }); 

    $('.slide-thumb-prd').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true, 
        asNavFor: '.slide-nav-prd',
        prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arrow-left.png" class="img-fluid" alt=""></a>', 
        nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arrow-right.png" class="img-fluid" alt=""></a>', 
    });
    $('.slide-nav-prd').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.slide-thumb-prd',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: { 
                    slidesToShow: 6,
                    infinite: true,
                }
            },
            { 
                breakpoint: 575, 
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],

    }); 

    $('.slide-thumb-solution').on('beforeChange', function(event, slick, activeSlide, nextSlide){
	    // console.log(nextSlide); 
	    $('.tab-desc .item').removeClass('active');
	    $('.tab-desc .item').eq(nextSlide || 0).addClass('active');
	  }).trigger('beforeChange');

    $('.title-quess').click(function(e) {
	    e.preventDefault();  
	    $(".title-quess").removeClass('active');
	    
	    var $this = $(this); 
	    if ($this.next().hasClass('active')) {
	        $this.removeClass('active');
	        $('.desc-anw').removeClass('active'); 
	        $this.next().slideUp(350).removeClass('active');
	    } else {
	        $('.desc-anw').slideUp(300).removeClass('active'); 
	        $this.toggleClass('active');
	        $this.addClass('active');
	        $this.next().slideToggle(350).addClass('active');  
	    }
	});

    $('.clc-tab').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.clc-tab').removeClass('active');
        $('.tab-content').removeClass('active');
 
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    $('.search-menu a').click(function(){
        $('.box-search').addClass('active');
    });
    $('.box-search .btn-close').click(function(){
        $('.box-search').removeClass('active');
    });

    $('.btn-bar-menu a').click(function(){
        $(this).toggleClass('active');
        $('.nav-mobile').toggleClass('active');
    });
})

