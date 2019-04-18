google.maps.event.addDomListener(window, 'load', initialize);
let geocoder;
let map;
let service;
let markers = [];
let infos = [];

function initialize() {

    geocoder = new google.maps.Geocoder();

    let center = new google.maps.LatLng(53.9021648, 27.5499173);
    let myOptions = {
        zoom: 14,
        center: center
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    document.getElementById("button1").addEventListener('click', findAddress);
    document.getElementById("button2").addEventListener('click', findPlaces);
}


// функция поиска адреса
function findAddress() {
    let address = document.getElementById("gmap_address").value;

    // определение местоположения по адресу
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            let newCenter = results[0].geometry.location;
            console.log(newCenter);
            map.setCenter(newCenter);

            document.getElementById('lat').value = results[0].geometry.location.lat();
            document.getElementById('lng').value = results[0].geometry.location.lng();

            var icon = {
                url: 'marker.png',
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0)
            };

            let addrMarker = new google.maps.Marker({
                position: newCenter,
                map: map,
                title: results[0].formatted_address,
                icon: icon
            });
        } else {
            alert('Ошибка: ' + status);
        }
    });
}

// функция поиска мест
function findPlaces() {

    let type = document.getElementById('gmap_place').value;
    let radius = document.getElementById('gmap_radius').value;
    let lat = document.getElementById('lat').value;
    let lng = document.getElementById('lng').value;
    let cur_location = new google.maps.LatLng(lat, lng);

    let request = {
        location: cur_location,
        radius: radius,
        types: [type]
    };

    // отправляем запрос
    service = new google.maps.places.PlacesService(map);
    service.search(request, createMarkers);
}

// добавляем метки
function createMarkers(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        clearOverlays();

        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    } else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        alert('По вашему запросу ничего не найдено');
    }
}

// функция для добавления одной метки
function createMarker(obj) {

    console.log(obj);

    let mark = new google.maps.Marker({
        position: obj.geometry.location,
        map: map,
        title: obj.name
    });
    markers.push(mark);

    let infowindow = new google.maps.InfoWindow({
        content: `<img class="img" src="` + obj.icon + '" />' + obj.name +
            '<br />Рейтинг: ' + obj.rating +
            '<br />Адрес: ' + obj.vicinity
    });

    // обработчик клика по метке
    google.maps.event.addListener(mark, 'click', function () {
        clearInfos();
        infowindow.open(map, mark);
    });
    infos.push(infowindow);
}

//удаление маркеров с карты
function clearOverlays() {
    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
        markers = [];
        infos = [];
    }
}

//закрытие окон с информацией
function clearInfos() {
    if (infos) {
        for (i in infos) {
            if (infos[i].getMap()) {
                infos[i].close();
            }
        }
    }
}

