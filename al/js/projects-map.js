//test data
var dataJson = {
  "type": "FeatureCollection",
  "features": [
    {"type": "Apteka", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, "properties": {"qq": 3, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=1' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"qq": 3, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=2' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=3' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [55.744522, 37.616378]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=4' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [55.780898, 37.642889]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=5' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [55.793559, 37.435983]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=6' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [55.800584, 37.675638]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=7' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 7, "geometry": {"type": "Point", "coordinates": [55.716733, 37.589988]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=8' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 8, "geometry": {"type": "Point", "coordinates": [55.775724, 37.56084]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=9' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 9, "geometry": {"type": "Point", "coordinates": [55.822144, 37.433781]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=10' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 10, "geometry": {"type": "Point", "coordinates": [55.87417, 37.669838]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=11' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 11, "geometry": {"type": "Point", "coordinates": [55.71677, 37.482338]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=12' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": [55.78085, 37.75021]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=13' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 13, "geometry": {"type": "Point", "coordinates": [55.810906, 37.654142]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=14' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 14, "geometry": {"type": "Point", "coordinates": [55.865386, 37.713329]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=15' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 15, "geometry": {"type": "Point", "coordinates": [55.847121, 37.525797]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=16' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 16, "geometry": {"type": "Point", "coordinates": [55.778655, 37.710743]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=17' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 17, "geometry": {"type": "Point", "coordinates": [55.623415, 37.717934]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=18' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 18, "geometry": {"type": "Point", "coordinates": [55.863193, 37.737]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=19' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}},
    {"type": "Feature", "id": 19, "geometry": {"type": "Point", "coordinates": [55.86677, 37.760113]}, "properties": {"qq": 2, "balloonContent": "<a class='map-popover-link' data-src='#testid' href='javascript:;'><img class='img-fluid' src='https://placehold.it/140x86?text=20' alt=''></a>", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}}
  ]
};

$(function() {
    ymaps.ready(init);
});

function init() {

    var myMap;
    var coords;
    var zoom;
    var geolocation = ymaps.geolocation;
    // координаты
    if(typeof(geolocation.latitude) != 'undefined' || typeof(geolocation.longitude) != 'undefined')
    {
        coords = [geolocation.latitude, geolocation.longitude];
        zoom = 8;
    }
    else
    {
        coords = [55.67648539089637, 37.57094863850402];
        zoom = 5;
    }

    myMap = new ymaps.Map("map", {
        center: coords,
        zoom: zoom,
        controls: []
    },{
        searchControlProvider: 'yandex#search'
    }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterBalloonContentLayout: "cluster#balloonCarousel",
            clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster-icon">{{ properties.geoObjects.length }}</div>'),
            clusterIconShape: {
                type: 'Rectangle',
                coordinates: [[0, 0], [30, 20]]
            }
    });

    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            layout: 'round#buttonLayout',
            position: { top: 234, right: 25 }
        }
    });
    myMap.controls.add(geolocationControl);

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: 'round#zoomLayout',
            position: { top: 280, right: 25 }
        }
    });
    myMap.controls.add(zoomControl);
    myMap.behaviors.disable('scrollZoom');

//*****
  MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="product-baloon">' +
        '$[[options.contentLayout observeSize minWidth=150 maxWidth=140 minHeight=96]]' +
        '</div>', {
        build: function () {
            this.constructor.superclass.build.call(this);

            this._$element = $('.product-baloon', this.getParentElement());

            this.applyElementOffset();

            this._$element.find('.close')
                .on('click', $.proxy(this.onCloseClick, this));
        },

        clear: function () {
            this._$element.find('.close')
                .off('click');

            this.constructor.superclass.clear.call(this);
        },

        onSublayoutSizeChange: function () {
            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

            if(!this._isElement(this._$element)) {
                return;
            }

            this.applyElementOffset();

            this.events.fire('shapechange');
        },

        applyElementOffset: function () {
            this._$element.css({
                left: -(this._$element[0].offsetWidth / 2),
                top: -(this._$element[0].offsetHeight)
            });
        },

        onCloseClick: function (e) {
            e.preventDefault();

            this.events.fire('userclose');
        },

        getShape: function () {
            if(!this._isElement(this._$element)) {
                return MyBalloonLayout.superclass.getShape.call(this);
            }

            var position = this._$element.position();
            console.log("position:", position);
            console.log(position.left, position.top, position.left + this._$element[0].offsetWidth);
            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                [position.left, position.top], [
                    position.left + this._$element[0].offsetWidth,
                    position.top + this._$element[0].offsetHeight
                ]
            ]));
        },

        _isElement: function (element) {
            return element && element[0];
        }
    });


    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set({
        balloonLayout: MyBalloonLayout,
        balloonPanelMaxMapArea: 0,
        balloonAutoPan: true
    });
    myMap.geoObjects.add(objectManager);

    $('.custom-control-input').on('input change click', function (e) {
      var objectId = $(this).is(':checked') ? $(this).val() : '';
      $('.custom-control-input').not(this).prop('checked', false);
      objectManager.setFilter(function (obj) {
        return !objectId || obj.properties.qq == objectId;
      });
    });

    objectManager.add(dataJson);

    $(document).on('click', '.map-popover-link', function(e) {
      e.preventDefault();
      //ajax here
      $('#projects-slider-tab').tab('show');
      //should be before slick init
      //
      //init after ajax success and insert content


      $('#projects-slider').on('init reInit', function(event, slick, currentSlide) {

      });


      $('[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        console.log('show tab toggled');
        $('#projects-slider').on('init reInit afterChange', function(event, slick, currentSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $('.project-slider-paging').text(i + ' / ' + slick.slideCount);
        });
        if (!$('#projects-slider').hasClass('slick-initialized')) {
          $('#projects-slider').slick({
            mobileFirst: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '#projects-slider-prew',
            focusOnSelect: true,
            accessibility: false,
            fade: true
          });
        }

        if (!$('#projects-slider-prew').hasClass('slick-initialized')) {
          $('#projects-slider-prew').slick({
            mobileFirst: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#projects-slider',
            focusOnSelect: true,
            accessibility: false,
            arrows: false,
            swipe: false,
            responsive: [{
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }, {
              breakpoint: 1199,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            }]
          });
        }
      });
    });
}
