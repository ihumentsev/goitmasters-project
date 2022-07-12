//  import $ from 'jquery';
$('.reviews__slider').slick({
  asNavFor: '.reviews__slider-nav',
  // normal options...
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0px',

  // the magic
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$('.reviews__slider-nav').slick({
  asNavFor: '.reviews__slider',
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});