// var mapsKey = myKey.apiKey;

// backend logic goes below

var parks = [];

$.ajax('./parks.json', {
  // data: 'parks.json',
  dataType: "jsonp",
  crossDomain: true,
  jsonpCallback: 'jsonpCallback',
  success: function(data) {
    parks = data.parks;
  }
});

var map;

// create the initial map centered over Portland
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.52, lng: -122.681944},
    zoom: 12
  });

  // show the user location with blue icon
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

    // for each park
    parks.forEach(function(park) {

      // grab content for park's infowindow
      var contentString = '<div id="content">' +
      '<h5>' + park.movieTitle + '</h5>' +
      '<h5>' + park.showDate + '</h5>' +
      '<h6>' + park.parkName + '</h6>' +
      '<h6>' + park.parkAddress + '</h6>' +
      '<img src="#">'  +
      '</div>';

      // create infowindow using content
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      // create marker for each park
      var marker = new google.maps.Marker({
        position: park.position,
        map: map,
        title: park.movieTitle
      });

      // on marker click show infowindow
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
