(function () {
    'use strict';
    angular.module("USCBPttrn")
        .controller("GeoProfileCtrl", ["$timeout", "RouteService", "$location", "$anchorScroll", "$mdSidenav", GeoProfileCtrl]);

    function GeoProfileCtrl($timeout, RouteService, $location, $anchorScroll, $mdSidenav) {

        var vm = this;
        vm.list = RouteService.data;
        vm.toggle = toggle;
        vm.list = RouteService.data;
        vm.virginiaText = "Virginia is the 12th largest state in the United states by population. Virginia has a total area of 42,7742.2 square miles including 3,180.13 swuare miles of water, making it the 35th- largest state by area. Virgina is boredered by";
        vm.nearbyStates = [
            {"name": "Maryland"}, 
            {"name": ", Washington, D.C "},
            {"name": ", North Carolina"}, 
            {"name": ", Tennessee"}, 
            {"name": ", Kentucky"},
            {"name": ", and West Virginia"}
        ];
        function toggle() {
            $mdSidenav('left').toggle();
        };

         vm.listOfLinks = 
        [
            {
                "text": "Michigan employment",
                "link": "by age"
            },
            {"text":"Michigan employment","link": "by race"},
            {"text": "Michigan employment", "link": "by county"},
            {"text": "Employment in ", "link": "United States"},
            {"text": "Michigan Employment", "link": "and median income"},
            {"text": "Michigan Employment", "link": "median age of worker"},
            {"text":"Michigan Employment", "link": "of people in poverty"},
            {"text": "Michigan employment", "link": "by educational attainment"}
        ];
        RouteService.get().then(function () {
            vm.list = RouteService.data;
            console.log(vm.list);
        });

    };
})();