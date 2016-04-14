/// <reference path="../../libs/angular.js" />
/// <reference path="../../libs/angular-route.js" />



var app = app || angular.module('gameshop', ['ngRoute']);

app.controller("listController", ['dataService', "$scope", function (dataService, $scope) {

    var vm = this;
    vm.games = dataService.get();
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    //api
    $scope.sort = sort;
    


    //impl
    
    function sort(column) {
        console.log("column", column);
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

}]);







