"use strict";

ymaps.ready(init);

function init() {

    var myMap;

    myMap = new ymaps.Map("contact-map", {
        center: [55.67333606906274, 37.63456649999992],
        zoom: 17,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: { top: 15, left: 15 }
    });

    var html = '<div class="contacts-popup">';
    html += '<div class="contacts-popup__body">';
    html += '<img src="img/logo-big.png" alt="" />';
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
        balloonContentSize: [289, 151]
    });

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}