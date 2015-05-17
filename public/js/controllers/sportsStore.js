// top-level controller - he top-level controller changes infrequently, but when it does change, there is a
//potential for breaking pretty much everything else in the application.

//The main role of the top-level controller in the SportsStore application is to define the data that will be used in
//the different views that the application will display.

//Omitting the second argument tells AngularJS that you want to locate a module that has already been defined.
//In this situation, AngularJS will report an error if the module specified doesn�t exist

//angular.module method return a Module object that can be used to define application functionality

angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5000/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
    $scope.data = {};
    $http.get(dataUrl)
    .success(function (data) {
        $scope.data.products = data;
    })
    .error(function (error) {
        $scope.data.error = error;
    });
});


