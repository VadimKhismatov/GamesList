var app = app || angular.module('gameshop', ['ngRoute']);


app.factory("dataService", function () {

    //var cache = [];
    var cache = [
        {
            id: 1459853355718,
            name: "Gears of War",
            year: "11.02.2005",
            genre: "Action",
            platform: "Xbox 360",
            price: "15",
            description:"'Gears of War' thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surfaced from the bowels of the planet.In this third-person tactical action/horror game, players live and breathe the role of Marcus Fenix. A disgraced former war hero, Marcus seeks personal redemption as he leads his fire team against an onslaught of merciless warrior fiends. Gamers immerse themselves in an experience so intensely emotional and gut-wrenching that playing will be like controlling a blockbuster action movie.",
            image: "https://prodcmsassets.blob.core.windows.net/media/Default/games/Games-Landing-395x542/optimized-images/gears1_large_opt-2f81566d05564d7da325d63cabf3eabc.jpg"
        },
        {
            id: 1459853355728,
            name: "Gears of War 2",
            year: "12.05.2007",
            genre: "Action",
            platform: "Xbox 360",
            price: "25",
            description: "The highly anticipated sequel to a blockbuster action game and one of the most popular Xbox 360 games in history. “Gears of War 2” picks up six months after the events of “Gears of War,” and thrusts players back into a harrowing story of human kind’s ongoing battle for survival against the nightmarish force of underground creatures known as the Locust Horde.  Players continue as Marcus Fenix, a reluctant war hero and leader of Delta Squad, and are taken on a journey of survival, loss and retribution.",
            image: "https://prodcmsassets.blob.core.windows.net/media/Default/games/Games-Landing-395x542/optimized-images/gears2_large_opt-226850c186b04e8788114a9947a84bad.jpg"
        }
    ];

    return {
        get: function () {
            return cache;
        },
        set: function (newGame) {

            cache[cache.length] = newGame;

            console.log("cache after set data", cache);
        }

    }

});
