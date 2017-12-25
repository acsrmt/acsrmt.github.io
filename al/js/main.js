'use strict';

$(function () {
  var projectSlider = $('#project-slider');
  var projectSliderContacts = $('#project-slider-contacts');
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
  var settingsContacts = {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1024,
      settings: "unslick"
    }]
  };

  // projectSlider.slick(settings);
  // projectSliderContacts.slick(settingsContacts);

  $(window).on('resize', function () {
    if ($(window).width() < 1024) {
      if (projectSlider.hasClass('slick-initialized')) {
        projectSlider.slick('slickUnfilter');
        projectSlider.slick('unslick');
      }
      return;
    }

    if (!projectSlider.hasClass('slick-initialized')) {
      projectSlider.slick(settings);
      projectSlider.slick('slickFilter', ':not(.project-item--all)');
    }
  }).resize();

  $(window).on('resize', function () {
    if ($(window).width() < 1024) {
      if (projectSliderContacts.hasClass('slick-initialized')) {
        projectSliderContacts.slick('unslick');
      }
      return;
    }

    if (!projectSliderContacts.hasClass('slick-initialized')) {
      return projectSliderContacts.slick(settingsContacts);
    }
  }).resize();

  $('#product-slider').slick({
    mobileFirst: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#product-slider-prew',
    focusOnSelect: true,
    accessibility: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        draggable: false,
        swipe: false,
        arrows: false
      }
    }]
  });

  $('#product-slider-prew').slick({
    mobileFirst: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#product-slider',
    focusOnSelect: true,
    accessibility: false,
    // centerMode: true,
    // centerPadding: 0,
    initialSlide: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        swipe: false,
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1280,
      settings: {
        swipe: false,
        slidesToShow: 6,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1600,
      settings: {
        swipe: false,
        slidesToShow: 7,
        slidesToScroll: 1
      }
    }]
  });

  $(document).on('click', '#projects-btn', function () {
    $('#projects-wrap').addClass('show-desc');
    $('#show-map-btn').removeClass('d-none');
    $('#projects-btn').addClass('d-none');
  });

  $(document).on('click', '#show-map-btn', function () {
    $('#projects-map-tab').tab('show');
  });

  $(document).on('click', '.projects-slider-prew-item', function () {
    $('#show-map-btn').addClass('d-none');
    $('#projects-btn').removeClass('d-none');
    $('#projects-wrap').removeClass('show-desc');
    // $('.projects-slider-content').fadeOut(1000);
  });

  $('#navsearch-btn').on('click', function () {
    $('#navsearch-form').addClass('open');
    $('#navsearch-form .search-input').focus();
    $('.page-header .navbar-nav').addClass('search-open');
    console.log('open search');
  });

  $('#navsearch-form').on('click', function (e) {
    e.stopPropagation();
  });

  $('.search-close').on('click', function () {
    $('#navsearch-form').removeClass('open');
    $('.page-header .navbar-nav').removeClass('search-open');
  });

  $(document).on('click touch', function (e) {
    // console.log($('#navsearch-form').length, $(e.target).attr('id') !== 'navsearch-btn', $(e.target).hasClass('search-ico'));
    if ($('#navsearch-form').length && $(e.target).attr('id') !== 'navsearch-btn' && !$(e.target).hasClass('search-ico')) {
      $('#navsearch-form').removeClass('open');
      $('.page-header .navbar-nav').removeClass('search-open');
    }
  });

  var slider = document.getElementById('slider');

  if (slider) {
    noUiSlider.create(slider, {
      start: [1200, 1200000],
      connect: true,
      range: {
        'min': [1200],
        'max': [1200000]
      }
    });

    var maxValue = document.getElementById('price-max');
    var minValue = document.getElementById('price-min');

    slider.noUiSlider.on('update', function (values, handle) {

      var value = values[handle];

      if (handle) {
        maxValue.value = Math.round(value).toLocaleString('ru-RU') + ' \₽';
      } else {
        minValue.value = Math.round(value).toLocaleString('ru-RU') + ' \₽';
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
  }

  $("input[type=file]").change(function (e) {
    var fileName = [],
        fieldVal = this,
        files = fieldVal.files;

    if (files && files.length >= 1) {
      for (var i = 0; i < files.length; i++) {
        fileName.push(' ' + $(this).get(0).files[i].name);
      }
    }

    if (fileName) {
      $(this).next(".custom-file__name").text(fileName);
    } else {
      $(this).next(".custom-file__name").text('');
    }
  });

  $('#category-desc').on('hidden.bs.collapse', function () {
    $('#category-desc').removeClass('collapse').css({
      'overflow': 'hidden',
      'height': '4.5rem'
    });
  });

  $('#category-show-more').on('click', function () {
    $(this).addClass('loader').prop('disabled', true);
    var content = $('.category-result').html();
    $('.category-result').append("<div id='ajax-catalog-loader' style='position:absolute;top:0px;left:0px;right:0;bottom:0px;background:white;margin:0px;-moz-opacity:.80;filter:alpha(opacity=80);opacity:0.8;z-index:4'></div>");
    setTimeout(function () {
      $('.category-result').append(content);
      $('#category-show-more').removeClass('loader').prop('disabled', false);
      console.log($('#ajax-catalog-loader').length);
      $('#ajax-catalog-loader').remove();
    }, 2000);
  });

  if ($('[data-fancybox]').length) {
    $('[data-fancybox]').fancybox({
      loop: false,
      // toolbar: false,
      infobar: false,
      // buttons: false,
      // arrows : false,
      btnTpl: {
        slideShow: false,
        fullScreen: false,
        thumbs: false,
        // close: true,
        // smallBtn: true,
        share: false,
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<img src="img/arrow-dark.svg" alt="">' + '</button>',

        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<img src="img/arrow-dark.svg" alt="">' + '</button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<img class="img-fluid" src="img/search-ico-close-dark.svg" alt="">' + '</button>'
      },
      thumbs: {
        autoStart: true,
        axis: 'x'
      }
    });
  }

  $('#message-form').validate({
    rules: {
      fio: {
        minlength: 2,
        maxlength: 50,
        required: true,
        alphabetic: true
      },
      tel: {
        required: true
      },
      email: {
        email: true
      },
      is_agreement: {
        required: true
      }
    },
    submitHandler: function submitHandler(form) {
      var form = $('#message-form');
      var data = form.serialize();

      //on ajax success show message-finish
      $('#message-finish-tab').tab('show');
      // $.ajax({
      //     type: 'POST',
      //     url: '/',
      //     // dataType: 'json',
      //     data: data,
      // })
      // .done(function(result) {
      // })
      // .fail(function() {
      // });
    }
  });

  $('#message-finish-close').on('click', function () {
    $('#message-tab').tab('show');
    $('#message-form')[0].reset();
    $('#message-form').find('.custom-file__name').text('');
  });

  $('.product-slider-prew-wrap').on('click', function (e) {
    e.stopPropagation();
  });

  $('.form-transparent .form-control').on('focusin', function () {
    $(this).parents('label').addClass('focused');
  });

  $('.form-transparent .form-control').on('focusout', function () {
    $(this).parents('label').removeClass('focused');
  });

  $('#message-file-btn').on('click', function () {
    $('#message-file').click();
  });
});