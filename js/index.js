// var mapsKey = myKey.apiKey;

// backend logic

$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

var parks = [];

$.getJSON('parks.json', function(data) {
  parks = data.parks;
});

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.52, lng: -122.681944},
    zoom: 12
  });

  // needs a differentiating icon
  var userIcon = new google.maps.Marker({
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    title: "Your current location"
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      userIcon.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, userIcon, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, userIcon, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, userIcon, pos) {
    userIcon.setPosition(pos);
    userIcon.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    }

    parks.forEach(function(park) {

      var contentString = '<div id="content">' +
      '<h5>' + park.movieTitle + '</h5>' +
      '<h5>' + park.showDate + '</h5>' +
      '<h6>' + park.parkName + '</h6>' +
      '<h6>' + park.parkAddress + '</h6>' +
      '<img src="#">'  +
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: park.position,
        map: map,
        title: park.movieTitle
      });

      marker.addListener('click', function() {
        if(!marker.open){
          infowindow.open(map, marker);
          marker.open = true;
        } else {
          infowindow.close();
          marker.open = false;
        }
      });
    });
  }

// frontend logic

$(document).ready(function() {
  // console.log(mapsKey);
  $("#map").append(map);
});
