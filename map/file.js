google.maps.event.addDomListener(window, 'load', initialize);
let geocoder;
let map;
let service;
let markers = [];
let addrMarker;
let icon;

function initialize() {

    geocoder = new google.maps.Geocoder();

    let center = new google.maps.LatLng(53.9021648, 27.5499173);    
    let myOptions = {
        zoom: 14,
        center: center
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    document.getElementById("button1").addEventListener('click', function () {
        let address = document.getElementById("gmap_address").value;        
        findAddress(address);
    });
    document.getElementById("button2").addEventListener('click', function () {
        let address = map.getCenter();
        findAddress(address);
    });
    document.getElementById("button3").addEventListener('click', findPlaces);
    document.getElementById("button4").addEventListener('click', function () {
        clearOverlays();
        clearAddress();
    });


}


// функция поиска адреса
function findAddress(addr) {
    let address = {};
    if (typeof addr == 'object')
        address = { 'latLng': addr };
    else
        address = { 'address': addr };

    // определение местоположения по адресу
    geocoder.geocode(address, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {           
            let newCenter = results[0].geometry.location;            
            map.setCenter(newCenter);
           

            document.getElementById('lat').value = results[0].geometry.location.lat();
            document.getElementById('lng').value = results[0].geometry.location.lng();

            let icon = {
                url: 'https://theunrefined.com.au/wp-content/plugins/google-maps/assets/images/icons/pointcenter48.png',   //'marker.png',       //'http://maps.google.com/mapfiles/ms/icons/green-dot.png',    
                scaledSize: new google.maps.Size(30, 30)               
            };

            if (addrMarker)
                addrMarker.setMap(null);

            addrMarker = new google.maps.Marker({
                position: newCenter,
                map: map,
                title: results[0].formatted_address,
                icon: icon
                //draggable:true
            });
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
    service.nearbySearch(request, createMarkers);
    service.nearbySearch(request, outputAddresses);    
}

// добавляем все метки
function createMarkers(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        clearOverlays();  // удаление маркеров с карты

        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    } else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        alert('По вашему запросу ничего не найдено');
    }
}
let mark_prev_click;
let a;

// добавление одной метки
function createMarker(obj) {
   
    icon = {
        url: 'https://theunrefined.com.au/wp-content/plugins/google-maps/assets/images/icons/marker128.png',       //'http://maps.google.com/mapfiles/ms/icons/green-dot.png',    
        scaledSize: new google.maps.Size(30, 30)
    };
    let mark = new google.maps.Marker({
        position: obj.geometry.location,
        map: map,
        title: obj.name,
        opacity: 1,
        icon: icon
    });


    markers.push(mark);

    let mark_mouseover = google.maps.event.addListener(mark, 'mouseover', function () {
        let iconActive = {
            url: 'https://theunrefined.com.au/wp-content/plugins/google-maps/assets/images/icons/greenmarker64.png',
            scaledSize: new google.maps.Size(40, 40)
        }
        mark.setIcon(iconActive);        
    });


    let mark_mouseout = google.maps.event.addListener(mark, 'mouseout', function () {
        mark.setIcon(icon);
    });


    // обработчик клика по метке
    google.maps.event.addListener(mark, 'click', function (e) {       
        if (mark_prev_click) {
            mark_prev_click.setIcon(icon);
            google.maps.event.addListener(mark_prev_click, 'mouseover', function () {
                let iconActive = {
                    url: 'https://theunrefined.com.au/wp-content/plugins/google-maps/assets/images/icons/greenmarker64.png',
                    scaledSize: new google.maps.Size(40, 40)
                }
                mark.setIcon(iconActive);
            });

            google.maps.event.addListener(mark_prev_click, 'mouseout', function () {
                mark.setIcon(icon);
            });
        }
        mark.setIcon('https://theunrefined.com.au/wp-content/plugins/google-maps/assets/images/icons/redmarker48.png');
        clearAddress();
        outputAddress(obj);
        mark_mouseout.remove();
        mark_mouseover.remove();
        mark_prev_click = mark;
    });


}

//вывод всех адресов
function outputAddresses(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {        
        for (let i = 0; i < results.length; i++) {
            outputAddress(results[i]);
        }
    }
}


// вывод одного адреса
function outputAddress(obj) {

    let request = {
        placeId: obj.place_id
    }
    service.getDetails(request, function (place, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                      

            let info = document.createElement('div');
            info.classList.add('info');
            info.innerHTML = `<div class="wrapper_for_img"><div class="address-img" style="background-image:url('` +
                place.photos[0].getUrl({ maxWidth: 180, maxHeight: 180 }) + `')"></div></div>` +
                '<p class="address-name">' + obj.name + '</p>' +
                '<p class="address-rating">Рейтинг: ' + obj.rating + '</p>' +
                '<p class="address-address">' + obj.vicinity + '</p>' +
                '<p class="address-phone">' + place.formatted_phone_number + '</p>' +
                '<p class="address-opening-hours"><span><b>Время работы: </b></span>' + place.opening_hours.weekday_text[new Date().getDay()].slice(-11) + '</p>';

            search_result_address.appendChild(info);
        }
    });
}


//удаление выведенных адресов
function clearAddress() {
    search_result_address.innerHTML = '';
}

//удаление маркеров с карты
function clearOverlays() {
    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
        markers = [];
    }
}

function clearClickMarker() {
    if (markers) {
        for (i in markers) {
            markers[i].setIcon(icon);
        }
    }
}


