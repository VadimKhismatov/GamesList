var app = app || angular.module('gameshop', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when("/list.html", {
            templateUrl: "views/list.html",
            controller: "listController as ctrl"
        })
        .when("/edit.html", {
            templateUrl: "views/edit.html",
            controller: "editController as ctrl"
        })
        .when("/edit.html?id=:id", {
            templateUrl: "views/edit.html",
            controller: "editController as ctrl"
        })
        .when("/gamedetails.html/id=:id", {
            templateUrl: "views/gamedetails.html",
            controller: "gameDetailController as ctrl"
        })
        .otherwise({
            redirectTo: "/list.html"
        });
}]);