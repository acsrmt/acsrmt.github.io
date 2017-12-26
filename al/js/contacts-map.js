ymaps.ready(function () {
    var myMap = new ymaps.Map('contact-map', {
        center: [55.67333606906274, 37.63456649999992],
        zoom: 16,
        controls: []
    });

    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            layout: 'round#buttonLayout',
            position: { top: 134, right: 25 }
        }
    });
    myMap.controls.add(geolocationControl);

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: 'round#zoomLayout',
            position: { top: 180, right: 25 }
        }
    });
    myMap.controls.add(zoomControl);
    myMap.behaviors.disable('scrollZoom');

    var html = '<div class="contacts-popup">';
    html += '<div class="contacts-popup__body">';
    html += '<img src="img/logo-big.png" alt="" />';
    html += '</div>';
    html += '<div class="arrow"></div>';
    html += '</div>';

    var myPlacemark = new ymaps.Placemark([55.67333606906274, 37.63246649999992], {
        balloonContent: html
    }, {
        balloonOffset: [30, -30],
        balloonLayout: "default#imageWithContent",
        balloonContentSize: [289, 151],
        balloonPanelMaxMapArea: 0
    });
    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

    var routeButton = new ymaps.control.RouteButton({
        options: {
            visible: true
        }
    });

    myMap.controls.add(routeButton);
    routeButton.routePanel.state.set({
        toEnabled: false,
        to: 'Каширское шоссе д.3 к.2',
        expanded: true
    });
});
