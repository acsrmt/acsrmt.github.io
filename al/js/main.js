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

  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [1200, 1200000],
    connect: true,
    range: {
      'min': 1200,
      'max': 1200000
    }
  });

  var maxValue = document.getElementById('price-max');
  var minValue = document.getElementById('price-min');

  slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
      maxValue.value = Math.round(value).toLocaleString('ru-RU');
    } else {
      minValue.value = Math.round(value).toLocaleString('ru-RU');
    }
  });

  minValue.addEventListener('input', function () {
    console.log(parseInt(this.value.replace(/\s/g, ''), 10));
    slider.noUiSlider.set([parseInt(this.value.replace(/\s/g, ''), 10), null]);
  });

  maxValue.addEventListener('input', function () {
    console.log(parseInt(this.value.replace(/\s/g, ''), 10));
    slider.noUiSlider.set([null, parseInt(this.value.replace(/\s/g, ''), 10)]);
  });
});