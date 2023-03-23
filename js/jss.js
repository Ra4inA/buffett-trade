


// $(window).on('load', function() {
    if ($(window).width() < 768) {
        // Partners slider
          $('.partners__slider').slick({
            centerMode: true,
            infinite: true,
            
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 1000,
            
  
            prevArrow: "<i class='icon-slick-arrow prev'></i>",
            nextArrow: "<i class='icon-slick-arrow next'></i>",
  
            // slidesToShow: 1,
          });
  
          
      } else {
          $('.partners__slider').slick("unslick");
      }
  
  
      // Team slider
  
    $('.team-slider').slick({
      // centerMode: true,
      infinite: true,
  
      cssEase: 'linear',
      // autoplay: true,
      // autoplaySpeed: 1000,
  
  
      prevArrow: "<i class='icon-slick-arrow prev'></i>",
      nextArrow: "<i class='icon-slick-arrow next'></i>",
  
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
        }],
    });
  
    // Students slider
    $('.students-slider').slick({
      // centerMode: true,
      infinite: true,
  
      cssEase: 'linear',
      // autoplay: true,
      // autoplaySpeed: 1000,
  
  
      prevArrow: "<i class='icon-slick-arrow prev'></i>",
      nextArrow: "<i class='icon-slick-arrow next'></i>",
  
      slidesToShow: 1,
      slidesToScroll: 1,
      // responsive: [
      //   {
      //     breakpoint: 1140,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //     }
      //   },
      //   {
      //     breakpoint: 820,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     }
      //   }],
    // });
  
  
  
  
  
  
  
  
  
  
  
  });
  
  
  
  
  
  
  // $('.slider').slick({
  //   dots: true,
  //   prevArrow: "<i class='icon-slick-arrow prev'></i>",
  //   nextArrow: "<i class='icon-slick-arrow next'></i>",
  //   infinite: false,
  //   slidesToShow: 1,
  // });
  
  // $(document).ready(function(){
  
  // SLIDER ---------------------------------
  
  
  
  
  // $('.prev').css('display', 'none');
  // $('.slider').on('afterChange', function(event, slick, currentSlide) {
  //     if(currentSlide == 0) {
  //         $('.prev').css('display', 'none');
  //     } else {
  //         $('.prev').css('display', 'block');
  //     }
  
  //     if (slick.$slides.length-1 == currentSlide) {
  //         $('.next').css('display', 'none');
  //       } else {
  //         $('.next').css('display', 'block');
  //       }
  //   });
  
  
  
  
  
  
  $(".prices__tab-swither input").on("change", function(){
      console.log("ya tyt");
      
      let a = $(this).attr("id");
      let projects = $(".project");
  
  
    // if ($(this).attr('id') == 'prices-checkbox-standard') {
    //   $('#tariffs-standard').toggleClass('_active')
    //   $('#tariffs-vip').toggleClass('_active')
    // } else {
      $('#tariffs-standard').toggleClass('_active')
      $('#tariffs-vip').toggleClass('_active')
    // }
  });
  
    
  
  
      // // $("#projects__content").css("opacity", "0").animate({"opacity": "1"}, 200);
      // for(let i=0; i < projects.length; i++){
      // 	console.log("ya ty1t");
      // 	if(!$(projects[i]).hasClass(a)){
      // 		$(projects[i]).css("display", "none");
      // 		console.log("ya tys1t");
      // 	} else {
      // 		$(projects[i]).css("display", "block");
      // 	}
      // }
  
  
    time = $('.time span span').text()
    console.log(time)






