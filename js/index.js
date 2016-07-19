// var mapsKey = myKey.apiKey;

// backend logic
var parks = [
  { parkName: "WoodLawn",
    lat: 45.5718618,
    lng: -122.6539132
  },


];
var userLocation = {lat: 45.5364789, lng: -122.3940587}
var woodLawn = {lat: 45.5718618, lng: -122.6539132}
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: userLocation,
    zoom: 10
  });

  var marker = new google.maps.Marker({
          position: woodLawn,
          map: map,
          title: 'WoodLawn Park'
        });
}

// frontend logic
$(document).ready(function() {
  // console.log(mapsKey);
  $("#map").append(map);
});
