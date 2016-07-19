// var mapsKey = myKey.apiKey;

// backend logic

// var parks = [
//   { parkName: "WoodLawn",
//     lat: 45.5718618,
//     lng: -122.6539132
//   }
// ];



// var userLocation = {lat: 45.5364789, lng: -122.3940587}
var woodLawn = {lat: 45.5718618, lng: -122.6539132}
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.52, lng: -122.681944},
    zoom: 10
  });

  var userWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      userWindow.setPosition(pos);
      userWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, userWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, userWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, userWindow, pos) {
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
