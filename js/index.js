// var mapsKey = myKey.apiKey;

// backend logic
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5718618, lng: -122.6539132},
    zoom: 16
  });
}

// frontend logic
$(document).ready(function() {
  // console.log(mapsKey);
  $("#map").append(map);
});
