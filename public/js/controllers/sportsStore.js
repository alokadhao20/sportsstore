// top-level controller - he top-level controller changes infrequently, but when it does change, there is a
//potential for breaking pretty much everything else in the application.

//The main role of the top-level controller in the SportsStore application is to define the data that will be used in
//the different views that the application will display.

//Omitting the second argument tells AngularJS that you want to locate a module that has already been defined.
//In this situation, AngularJS will report an error if the module specified doesn�t exist

//angular.module method return a Module object that can be used to define application functionality

angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
    $scope.data = {
        products: [
            {name: "Product #1", description: "A product",
                category: "Category #1", price: 100},
            {name: "Product #2", description: "A product",
                category: "Category #1", price: 110},
            {name: "Product #3", description: "A product",
                category: "Category #2", price: 210},
            {name: "Product #4", description: "A product",
                category: "Category #3", price: 202}]
        };
});


