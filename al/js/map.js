'use strict';

$(function () {
    ymaps.ready(init);
});

function init() {

    var myMap;
    var coords;
    var zoom;
    var geolocation = ymaps.geolocation;
    // координаты
    if (typeof geolocation.latitude != 'undefined' || typeof geolocation.longitude != 'undefined') {
        coords = [geolocation.latitude, geolocation.longitude];
        zoom = 8;
    } else {
        $.ajax({
            async: false,
            dataType: 'json',
            method: 'POST',
            data: { get_geo: true },
            success: function success(data) {
                coords = data;
                zoom = 8;
            },
            error: function error() {
                coords = [55.67648539089637, 37.57094863850402];
                zoom = 5;
            }
        });
        coords = [55.67648539089637, 37.57094863850402];
        zoom = 5;
    }
    myMap = new ymaps.Map("map", {
        center: coords,
        zoom: zoom,
        controls: ['zoomControl', 'searchControl', 'fullscreenControl', 'geolocationControl']
    }, {
        searchControlProvider: 'yandex#search'
    }), objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 32
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add("zoomControl", {
        position: { top: 15, left: 15 }
    });

    var html = '<div class="popup">';
    html += '<div class="popup-text">';

    html += '<p>117997, г. Москва, Нахимовский проспект, д. 32.</p>';
    html += '<p>Институт Дальнего Востока РАН </p>';
    html += '<p>Прием сообщений - офис 1300 </p>';
    html += '<p>Коммерческий отдел - офис 1315</p>';
    html += '<p>Бухгалтерия - офис 1317 </p>';
    html += '<p></p>';
    html += '</div>';
    html += '</div>';

    var myPlacemark = new ymaps.Placemark([55.67648539089637, 37.57094863850402], {
        balloonContentHeader: "OOO «Коммерсантъ КАРТОТЕКА»",
        balloonContentBody: html,
        balloonContentFooter: "8 800 100-85-55 (звонок по России бесплатный)",
        hintContent: "Коммерсантъ КАРТОТЕКА"
    }, { iconLayout: 'default#image',
        iconImageHref: '/images/ymap/min_marker.png',
        iconImageSize: [40, 51],
        iconImageOffset: [-20, -47],
        balloonContentSize: [289, 151]

    });

    myMap.geoObjects.add(myPlacemark);

    // Создадим собственный макет выпадающего списка.
    ListBoxLayout = ymaps.templateLayoutFactory.createClass("<button id='my-listbox-header' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>" + "{{data.title}} <span class='caret'></span>" + "</button>" +
    // Этот элемент будет служить контейнером для элементов списка.
    // В зависимости от того, свернут или развернут список, этот контейнер будет
    // скрываться или показываться вместе с дочерними элементами.
    "<ul id='my-listbox'" + " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu'" + " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>", {

        build: function build() {
            // Вызываем метод build родительского класса перед выполнением
            // дополнительных действий.
            ListBoxLayout.superclass.build.call(this);

            this.childContainerElement = $('#my-listbox').get(0);
            // Генерируем специальное событие, оповещающее элемент управления
            // о смене контейнера дочерних элементов.
            this.events.fire('childcontainerchange', {
                newChildContainerElement: this.childContainerElement,
                oldChildContainerElement: null
            });
        },

        // Переопределяем интерфейсный метод, возвращающий ссылку на
        // контейнер дочерних элементов.
        getChildContainerElement: function getChildContainerElement() {
            return this.childContainerElement;
        },

        clear: function clear() {
            // Заставим элемент управления перед очисткой макета
            // откреплять дочерние элементы от родительского.
            // Это защитит нас от неожиданных ошибок,
            // связанных с уничтожением dom-элементов в ранних версиях ie.
            this.events.fire('childcontainerchange', {
                newChildContainerElement: null,
                oldChildContainerElement: this.childContainerElement
            });
            this.childContainerElement = null;
            // Вызываем метод clear родительского класса после выполнения
            // дополнительных действий.
            ListBoxLayout.superclass.clear.call(this);
        }
    }),

    // Также создадим макет для отдельного элемента списка.
    ListBoxItemLayout = ymaps.templateLayoutFactory.createClass("<li><a>{{data.content}}</a></li>"),

    // Создадим 2 пункта выпадающего списка
    listBoxItems = [new ymaps.control.ListBoxItem({
        data: {
            content: 'Центральный Ф.О.',
            center: [54.9, 39.19],
            zoom: 6
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Северо-Западный Ф.О.',
            center: [62.388, 47.7458],
            zoom: 5
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Южный Ф.О.',
            center: [47.4, 43.16],
            zoom: 6
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Северо-Кавказский Ф.О.',
            center: [43.765150489770214, 44.735885499999995],
            zoom: 6
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Приволжский Ф.О.',
            center: [56.18935695037974, 51.73337100000001],
            zoom: 6
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Уральский Ф.О.',
            center: [64.87185143217793, 71.56933549999995],
            zoom: 6
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Сибирский Ф.О.',
            center: [59.928014, 98.860839],
            zoom: 4
        }
    }), new ymaps.control.ListBoxItem({
        data: {
            content: 'Дальневосточный Ф.О.',
            center: [64.82536453378198, 141.99045199999986],
            zoom: 4
        }
    })],

    // Теперь создадим список, содержащий 2 пунтка.
    listBox = new ymaps.control.ListBox({
        items: listBoxItems,
        data: {
            title: 'Региональные представительства'
        },
        options: {
            // С помощью опций можно задать как макет непосредственно для списка,
            layout: ListBoxLayout,
            // так и макет для дочерних элементов списка. Для задания опций дочерних
            // элементов через родительский элемент необходимо добавлять префикс
            // 'item' к названиям опций.
            itemLayout: ListBoxItemLayout
        }
    });

    listBox.events.add('click', function (e) {
        // Получаем ссылку на объект, по которому кликнули.
        // События элементов списка пропагируются
        // и их можно слушать на родительском элементе.
        var item = e.get('target');
        // Клик на заголовке выпадающего списка обрабатывать не надо.
        if (item != listBox) {
            myMap.setCenter(item.data.get('center'), item.data.get('zoom'));
        }
    });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#bluenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    $.ajax({
        //url: "/files/data.json",
        dataType: 'json',
        method: 'POST',
        data: { get_file: true }
    }).done(function (data) {
        objectManager.add(data);
    });

    myMap.controls.add(listBox, { float: 'left' });
}