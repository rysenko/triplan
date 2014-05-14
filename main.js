function MainCtrl($scope) {
    $scope.$watch('markersTxt', function (markersTxt) {
        //
    });
}

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(44.9597494,34.1050978),
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);