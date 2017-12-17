"use strict";

ymaps.ready(init);

function init() {

    var myMap;

    myMap = new ymaps.Map("contact-map", {
        center: [55.67333606906274, 37.63456649999992],
        zoom: 17,
        controls: []
    });

    // Создадим пользовательский макет ползунка масштаба.
    var ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" + "<div id='zoom-in' class='btn'><i class='icon-plus'>+</i></div><br>" + "<div id='zoom-out' class='btn'><i class='icon-minus'>-</i></div>" + "</div>", {

        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function build() {
            // Вызываем родительский метод build.
            ZoomLayout.superclass.build.call(this);

            // Привязываем функции-обработчики к контексту и сохраняем ссылки
            // на них, чтобы потом отписаться от событий.
            this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
            this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

            // Начинаем слушать клики на кнопках макета.
            $('#zoom-in').bind('click', this.zoomInCallback);
            $('#zoom-out').bind('click', this.zoomOutCallback);
        },

        clear: function clear() {
            // Снимаем обработчики кликов.
            $('#zoom-in').unbind('click', this.zoomInCallback);
            $('#zoom-out').unbind('click', this.zoomOutCallback);

            // Вызываем родительский метод clear.
            ZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function zoomIn() {
            var map = this.getData().control.getMap();
            map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
        },

        zoomOut: function zoomOut() {
            var map = this.getData().control.getMap();
            map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
        }
    });

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: ZoomLayout,
            position: { top: 144, right: 25 }
        }
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add(zoomControl);
    // myMap.controls.add("zoomControl", {
    //     position: {top: 15, right: 15},
    //     size: "small"
    // });

    // var control = myMap.controls.get('routeButtonControl');
    // Программно установим начальную точку маршрута.
    // control.routePanel.state.set('to', 'Каширское шоссе д.3 к.2');
    myMap.controls.add('geolocationControl');
    var html = '<div class="contacts-popup">';
    html += '<div class="contacts-popup__body">';
    html += '<img src="img/logo-big2.png" alt="" />';
    html += '</div>';
    html += '<a class="contacts-popup__footer" href="#">Проложить к нам маршрут</a>';
    html += '</div>';

    var myPlacemark = new ymaps.Placemark([55.67333606906274, 37.63246649999992], {
        balloonContent: html
    }, { iconLayout: 'default#image',
        iconImageHref: 'http://blog.karmanov.ws/files/APIYaMaps1/min_marker.png',
        iconImageSize: [40, 51],
        iconImageOffset: [-20, -47],
        balloonLayout: "default#imageWithContent",
        balloonContentSize: [289, 151],
        balloonPanelMaxMapArea: 0
    });

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}