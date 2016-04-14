/// <reference path="../../libs/jquery-2.2.3.js" />
/// <reference path="../../libs/angular.js" />
/// <reference path="../../libs/angular-route.js" />


var app = app || angular.module('gameshop', ['ngRoute']);

app.controller("editController", ["dataService", "$log", "$routeParams", function (dataService, $log, $routeParams) {

    var vm = this;



    vm.model = getEmptyGame();

    var cache = dataService.get();

    var originGame = "";


    vm.yearPattern = /(0[1-9]|[12][0-9]|3[01])[ \.-](0[1-9]|1[012])[ \.-](19|20|)\d\d/;
    vm.pricePattern = /^\d+/;


    //api
    vm.addGame = addGame;
    vm.edit = edit;
    vm.clear = clear;



    //exec
    activate();


    //impl

    function activate() {

        if ($routeParams.id) edit()

    };



    function getEmptyGame() {

        return {

            id: new Date().getTime(),
            name: "",
            year: "",
            genre: "",
            platform: "",
            price: "",
            description:"",
            image: ""
        };

    };


    function addGame() {
        $log.debug(vm.model)


        if ($routeParams.id) {

            //обновление игры
            $.extend(true, originGame, vm.model);
            
        } else {

            var game = vm.model;
            //console.log('game',game);

            dataService.set(game);

            clear();
        }

    };


    function edit() {
        //console.log("edit work");

        var id = $routeParams.id;

        for (var i = 0; i < cache.length; i++) {
            var game = cache[i];

            if (game.id == id) {

                originGame = game;
                console.log("originGame from edit", originGame);

                vm.model = $.extend(true, vm.model, originGame);
            }
        }

    };



    function clear() {

        if ($routeParams.id == originGame.id) {

            $.extend(true, vm.model, originGame);

        } else {
            vm.model = getEmptyGame();
        }


        //console.log('clear work');

    };


}]);