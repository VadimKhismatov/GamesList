/// <reference path="../../libs/angular.js" />
/// <reference path="../../libs/angular-route.js" />

var app = app || angular.module('gameshop', ['ngRoute']);

app.controller("gameDetailController", ["dataService", "$routeParams", function (dataService, $routeParams) {

    var vm = this;
    vm.model = "";
    var games = dataService.get();


    //api
    vm.remove = remove;

    //exec
    activate();

    //impl

    function activate() {
        if ($routeParams.id) gameDetail();
    };



    function gameDetail() {

        var id = $routeParams.id;

        for (var i = 0; i < games.length; i++) {

            var game = games[i];
            if (id == game.id) {
                vm.model = game;
            }
        }
    };

    function remove(id) {
        
        for (var i = 0; i < games.length; i++) {
            var game = games[i];
            if (id == game.id) {
                games.splice(i,1);
                
            }
        };
    }

}]);
