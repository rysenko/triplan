var app = require('../module');

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.sidebar = true;
    $scope.$watch('markersTxt', function (markersTxt) {
        console.log(markersTxt);
    });
    $scope.map = {
        center: {
            latitude: 44.9597494,
            longitude: 34.1050978
        },
        zoom: 10
    };
}]);