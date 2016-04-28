$(document).ready(onDocumentReady)


function onDocumentReady(){

  var menuRegex = /(about|dimensions|support|specs)/gi
  $("#menu-section ul li a").bind("click", function(e){
    var contentList = [".about", ".dimensions", ".specs", ".support"]
    $("#menu-section").find(".selected").removeClass("selected");
    $(e.currentTarget.parentElement).addClass("selected", 10000, "swing")
    var contentId = $(e.target).html().toLowerCase()
    var hideEm = removeFromArray(contentList, "."+contentId).join(",");
    $(hideEm).css("display","none")
    $("#"+contentId).css("display","block")

  })

}

function removeFromArray(array, item) {
    var itemIndex;

    // Look for the item (the item can have multiple indices)
    itemIndex = array.indexOf(item);

    while (itemIndex !== -1) {
        // Remove the item, then return the modified array
        array.splice(itemIndex, 1);

        itemIndex = array.indexOf(item);
    }

    // Return the modified array
    return array;
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
