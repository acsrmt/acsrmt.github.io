'use strict';

$(function () {
  var projectSlider = $('#project-slider');
  var settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: "unslick"
    }]
  };
  projectSlider.slick(settings);
  $(window).on('resize', function () {
    if ($(window).width() < 1024) {
      if (projectSlider.hasClass('slick-initialized')) {
        console.log('unslick');
        projectSlider.slick('unslick');
      }
      return;
    }

    if (!projectSlider.hasClass('slick-initialized')) {
      console.log('slick');
      return projectSlider.slick(settings);
    }
  }).resize();

  $('#navsearch-btn').on('click', function () {
    $('#navsearch-form').toggleClass('open');
    $('#navsearch-form .search-input').focus();
  });

  $('.search-close').on('click', function () {
    $('#navsearch-form').removeClass('open');
  });
});
