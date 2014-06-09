var app = require('../module');

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.sidebar = true;
    $scope.markers = [];
    $scope.$watch('markersTxt', function (markersTxt) {
        var markerLines = (markersTxt || '').split('\n');
        var markers = [];
        markerLines.forEach(function (markerLine) {
            var matchResult = markerLine.match(/([^\d]+)4\s(\d)(\d{2},\d{1,4});\s3\s(\d)(\d{2},\d{1,4})/);
            if (matchResult) {
                markers.push({
                    title: matchResult[1].trim(),
                    center: {
                        latitude: 40 + Number(matchResult[2]) + Number(matchResult[3].replace(',', '.')) / 60,
                        longitude: 30 + Number(matchResult[4]) + Number(matchResult[5].replace(',', '.')) / 60
                    }
                });
            }
        });
        $scope.markers = markers;
    });
    $scope.map = {
        center: {
            latitude: 44.9597494,
            longitude: 34.1050978
        },
        zoom: 10
    };
}]);