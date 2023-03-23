
$(window).on('load', function() {
  setTimeout(function(){
    lastDay = 23
    setInterval(function(){
      time = $('#Moscow_z71d span:first-child').html();
      date = $('#Moscow_z71d span:last-child').html();


      let arrayOfTime = time.split(':');

      secsMsk = arrayOfTime[2]
      minsMSk = arrayOfTime[1]
      hoursMsk = arrayOfTime[0]

      
      let arrayOfDate = date.split('-');
      dayMsk = arrayOfDate[2]
      monthMsk = arrayOfDate[1]
      yearMsk = arrayOfDate[0]

  
      
      
      currentTime = new Date(dayMsk, monthMsk, yearMsk, hoursMsk, minsMSk, secsMsk, 0) // Время по Москве
      deadline = new Date(2023, 03, lastDay-1, 0, 0, 0, 0); // Время окончания скидки
      dayToday = dayMsk

      if(dayToday == lastDay) {
        return false;
 
        
       
        
        

      } else if(dayToday < lastDay) {
        let timer = deadline - currentTime;
 
        // Перевод в часы, с учетом остатка деления на 24
        let toHours = (Math.floor(timer / 1000 / 60 / 60) % 48);
        // Перевод в минуты, с учетом остатка деления на 60
        let toMinutes = (Math.floor(timer / 1000 / 60) % 60);
        // Перевод в секунды, с учетом остатка деления на 60
        let toSeconds = (Math.floor(timer / 1000) % 60);   
        
        $('#timer').text(('00' + toHours).slice(-2) +":"+ ('00' + toMinutes).slice(-2) +":"+ ('00' + toSeconds).slice(-2))

    } else {
      lastDay +=2
    }
    },1000); 
  }, 1000);


});
// Offer video

const video = $('video')[0]
$('#offerVideoPlay').on('click', function() {
  
  if ( $('.video').hasClass('_playing')) {
    
    $('#offerVideoPlay').css('opacity', '1')
    $('.video').removeClass('_playing')
    video.pause();

    $('.video__btn').css('display', 'none')
  } else {
    $('#offerVideoPlay').css('opacity', '0')
    video.play();
    $('.video').addClass('_playing');

    $('.video__btn').css('display', 'block')
  }

  
});

$(window).on('load', function() {
  if ($(window).width() < 768) {
    // Offer btn
    $('.offer__btn').text('How it works?')
    // Partners slider
      $('.partners__slider').slick({
        centerMode: true,
        infinite: true,
        
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 1000,
        

        prevArrow: "<i class='icon-slick-arrow prev'></i>",
        nextArrow: "<i class='icon-slick-arrow next'></i>",

        slidesToShow: 1,
      });
      
      $('.partners__slider .slick-track').css('align-items', 'center')
      
  } else {
      $('.partners__slider').slick("unslick");
  };

  
});



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

$(window).on('load resize', function() {
if ($(this).width() < 820) {
  $('.team-slider').slick('slickRemove', 0);
  $('.team__title_no-slide').removeClass('_d-none');
} else {
  $('.team__title_no-slide').addClass('_d-none');
}


});







// Students
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
});

$('.student__btn').on('click', function(){
  if($(this).hasClass('student__btn_active')) {
    $(this).removeClass('student__btn_active')
    $(this).text('more')
    $(this).parent().removeClass('student__content_active')

  } else {
    $(this).addClass('student__btn_active')
    $(this).text('hide')
    $(this).parent().addClass('student__content_active')
  }
  
});

// Prices

$(".prices__tab-swither input").on("change", function(){



let a = $(this).attr("id");
if ($(window).width() < 1150) {
  $('#tariffs-standard').toggleClass('_active');
  $('#tariffs-vip').toggleClass('_active');

  $('#tariffs-standard').toggleClass('_d-none');

  
  
  $('#tariffs-vip').toggleClass('_d-none');
} else {
  $('#tariffs-standard').toggleClass('_active')
  $('#tariffs-vip').toggleClass('_active')

  $('#tariffs-standard').toggleClass('_d-none');

  
  
  $('#tariffs-vip').toggleClass('_d-none');
  
};

// $('#tariffs-vip').hide();

// $('#tariffs-standard').toggleClass('_d-none')
// $('#tariffs-vip').toggleClass('_d-none')

});

$(window).on('load', function() {
  if ($(window).width() < 1150) {
    // Prices slider
    // $('#tariffs-standard').addClass("_d-block");
    // $('#tariffs-vip').addClass("_d-block");
    $('.prices__slider').slick({
      cssEase: 'ease',
      prevArrow: "<i class='icon-slick-arrow prev'></i>",
      nextArrow: "<i class='icon-slick-arrow next'></i>",
      // slidesToShow: 2,
      infinite: false,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1,
              centerMode: 'true',
            }
          }],
        });
      

  } else {

    $('.partners__slider').slick("unslick");
    // 

    // $('.tariffs__item').removeClass("_a")

  };


});

setTimeout(function () {
$('#tariffs-vip').delay(1000).addClass('_d-none')
}, 2000)


if ($(window).width() < 767) {
  $('.label_1').text('Standard')
  
  $('.label_2').text('VIP')
} else {
  $('.label_1').text('Standard packages')
  
  $('.label_2').text('VIP packages')
}


$(window).on('load resize', function() {
  if ($(this).width() < 577) {
      $('.tg-btn').html("<i class='icon-tg'></i>");
  } else {
    $('.tg-btn').html("Telegram chanel");
  }
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





// Reviews

$('#reviews__btn').on('click', function() {
  $('.review-card').appendTo('.cards .container')
  $('.cards').addClass('cards_active')
  });


$(window).on('load', function() {
  if ($(window).width() < 768) {
    // Offer btn
    
    $('#reviews__btn').on('click', function() {
      setTimeout(function(){
        console.log('sssdad3we12')
        $('reviews__slider').slick({
          centerMode: true,
          infinite: true,
          
          cssEase: 'ease',
          autoplay: true,
          autoplaySpeed: 1000,
          
  
          prevArrow: "<i class='icon-slick-arrow prev'></i>",
          nextArrow: "<i class='icon-slick-arrow next'></i>",
  
          slidesToShow: 1,
        });
      }, 1000)
      
    });
    // Partners slider
      
    }
  });

