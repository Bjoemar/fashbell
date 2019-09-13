$(document).ready(function(){	

  AOS.init();
  
  $('.dropdown-trigger').dropdown();



  $('.most-rated-parent').slick({
    centerMode: true,
    centerPadding: '5px;',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: $('.prev-btn-slide'),
    prevArrow:  $('.next-btn-slide'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
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


    $('.carousel').carousel({
      'shift' : -100,
    });


    $('.chips-autocomplete').chips({
        autocompleteOptions: {
          data: {
            'Sweater': null,
            'Dress': null,
            'Jacket': null,
            'Shoes': null,
            'Hats': null
          },
          limit: Infinity,
          minLength: 1
        }
      });

    $(document).ready(function(){
      $('.modal').modal();
    });


  $('#textarea1').css({
    'height' : '200px',
  });

   $('select').formSelect();

   $('.collapsible').collapsible();


          

    $('.sidenav').sidenav();
  
    $('.chips-placeholder').chips({
      placeholder: 'Enter Tags ',
      secondaryPlaceholder: 'Add More Tags',
    });





    
})



