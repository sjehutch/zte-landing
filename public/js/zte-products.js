$(document).ready(onDocumentReady)

function onDocumentReady(){



}

// Callback for Google Map
function initMap(){
  console.log("ZTE:: Initialzing Map")
  map = new google.maps.Map(document.getElementById('map-area'), {
            center: {lat: 32.7767, lng: -96.7970},
            zoom: 10,
            mapTypeControl: false,
            streetViewControl: false,
            panControl: false,
            zoomControl: false,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true
         });
}
