
var questionApp = angular.module("questApp" , [] );

questionApp.controller("questCtrl" , function ($scope, $http) {
    $http.get("https://venbest-test.herokuapp.com/")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });






});















