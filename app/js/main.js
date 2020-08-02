$(function () {




});

$(document).ready(function () {

  $('.common-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('#map').hide()
  $('.map__btn').on('click', function(e){
    e.preventDefault();
    $('#map').slideToggle();
  });

});


// var stepsSlider = document.getElementById('slider');
// var input0 = document.getElementById('input-with-keypress-0');
// var input1 = document.getElementById('input-with-keypress-1');
// var inputs = [input0, input1];

// noUiSlider.create(stepsSlider, {
//     start: [20, 80],
//     connect: true,
//     tooltips: [true, wNumb({decimals: 1})],
//     range: {
//         'min': [0],
//         '10%': [10, 10],
//         '50%': [80, 50],
//         '80%': 150,
//         'max': 200
//     }
// });

// stepsSlider.noUiSlider.on('update', function (values, handle) {
//     inputs[handle].value = values[handle];
// });
// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

//Menu

$('.hamburger-menu').on('click', function (e) {
  e.preventDefault();
  $('.header-topline__links').css('left','0px');
  $('body').addClass('disable');
  $('.overlay').addClass('active');
});
$('.close-menu, .overlay').on('click', function (e) {
  e.preventDefault();
  $('.header-topline__links').css('left','-300px');
  $('body').removeClass('disable');
  $('.overlay').removeClass('active');
});

//Accordion

$(document).ready(function(){
  // Add down arrow icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".orders__node-header, .rewievs__title").addClass("active");
  });
  
  // Toggle right and down arrow icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".orders__node-header, .rewievs__title").addClass("active");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".orders__node-header, .rewievs__title").removeClass("active");
  });
});


//Slick slider

$('.product-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-nav'
});
$('.product-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-for',
  dots: false,
  arrows:false,
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
});


// Slick sliders 

let goods__slider = $('.goods-slider');

let goods__slider__settings = {
  arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }           
  ]  
}

if(window.innerWidth < 1600){
  goods__slider.slick(goods__slider__settings);
}

//Resize slider
$(window).resize(function (e) {
  if (window.innerWidth > 1600) {
    if ($(goods__slider).hasClass('slick-initialized')) {
      $(goods__slider).slick('unslick');
    }
  }
  else {
      if(!$(goods__slider).hasClass('slick-initialized')){
        $(goods__slider).slick(goods__slider__settings);
    }    
  }
});
