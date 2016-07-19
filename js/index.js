// var mapsKey = myKey.apiKey;

// backend logic

// var parks = [
//              { parkName: "WoodLawn",
//                parkAddress: "NE 13th Ave & Dekum St",
//                lat: 45.5718618,
//                lng: -122.6539132,
//                movieTitle: "The Sandlot (1993) PG",
//                showDate: "Sun, July 10"
//              }
//            ];


// var userLocation = {lat: 45.5364789, lng: -122.3940587}
var woodLawn = {lat: 45.5718618, lng: -122.6539132};
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.52, lng: -122.681944},
    zoom: 10
  });

  // needs a differentiating icon
  var userIcon = new google.maps.Marker({
    map: map
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      userIcon.setPosition(pos);
      //userWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, userIcon, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, userIcon, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, userIcon, pos) {
        userWindow.setPosition(pos);
        userWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

  var contentString = '<div id="content">' +
  '<span><img src="img/sandlot.jpg"></span>'  +
  '</div>';

  var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

  var marker = new google.maps.Marker({
          position: woodLawn,
          map: map,
          title: 'WoodLawn Park'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}


// frontend logic
$(document).ready(function() {
  // console.log(mapsKey);
  $("#map").append(map);
});
