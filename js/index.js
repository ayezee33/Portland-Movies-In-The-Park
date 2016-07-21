// var mapsKey = myKey.apiKey;

// backend logic

var parks = [
             { parkName: "WoodLawn Park",
               parkAddress: "NE 13th Ave & Dekum St",
               position: {lat: 45.5718618, lng: -122.6539132},
               movieTitle: "The Sandlot (1993) PG",
               showDate: "Sun, July 10"
             },
             { parkName: "Brentwood Park",
               parkAddress: "SE 60th & Duke St",
               position: {lat: 45.4758258, lng: -122.604421},
               movieTitle: "Megamind (2011) PG",
               showDate: "Wed, July 13"
             },
             { parkName: "Jackson Middle School",
               parkAddress: "10625 SW 35th Ave",
               position: {lat: 45.4486055, lng: -122.7166102},
               movieTitle: "Kung Fu Panda 3 (2016) PG",
               showDate: "Thu, July 14"
             },
             { parkName: "Irving Park",
               parkAddress: "NE 7th Ave & Fremont St",
               position: {lat: 45.546751, lng: -122.6582078},
               movieTitle: "Star Wars – The Force Awakens (2015) PG-13",
               showDate: "Fri, July 15"
             },
             { parkName: "Glenhaven Park",
               parkAddress: "NE 82nd Ave & Siskiyou St",
               position: {lat: 45.5435703, lng: -122.5831002},
               movieTitle: "Raiders of the Lost Ark (1981) PG",
               showDate: "Sat, July 16"
             },
             { parkName: "Hoyt Arboretum",
               parkAddress: "4000 SW Fairview Blvd",
               position: {lat: 45.5718618, lng: -122.6539132},
               movieTitle: "Dr. Seuss’ The Lorax (2012) PG",
               showDate: "Sat, July 16"
             },
             { parkName: "Denorval Unthank Park",
               parkAddress: "510 N Shaver St",
               position: {lat: 45.5514141, lng: -122.6736975},
               movieTitle: "Avengers Age of Ultron (2015) PG-13",
               showDate: "Sun, July 17"
             },
             { parkName: "George Park",
               parkAddress: "N Burr Ave & Fessenden St",
               position: {lat: 45.5937175, lng: -122.7413957},
               movieTitle: "Ferris Bueller's Day Off (1986) PG-13",
               showDate: "Wed, July 20"
             },
             { parkName: "Woodstock Park",
               parkAddress: "SE 47th & Steele St",
               position: {lat: 45.4846979, lng: -122.6166256},
               movieTitle: "Star Wars – The Force Awakens (2015) PG-13",
               showDate: "Fri, July 22"
             },
             { parkName: "Walker Stadium in Lents Park",
               parkAddress: "SE 92nd & Holgate Blvd",
               position: {lat: 45.4883407, lng: -122.5717723},
               movieTitle: "42: The Jackie Robinson Story (2013) PG-13",
               showDate: "Sat, July 23"
             },
           ];


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.52, lng: -122.681944},
    zoom: 12
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
        lng: position.coords.longitude,
      };

      userIcon.setPosition(pos);
      userIcon.setContent('Location found.');
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

  // var contentString = '<div id="content">' +
  // '<img src="img/sandlot.jpg">'  +
  // '</div>';
  //
  // var infowindow = new google.maps.InfoWindow({
  //         content: contentString
  //       });

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
      infowindow.open(map, marker);
    });
  })
}


// frontend logic
$(document).ready(function() {
  // console.log(mapsKey);
  $("#map").append(map);
});
