(function(){
    'use strict';
    angular.module("USCBPttrn")
        .controller("AllResultsCtrl",["$timeout","RouteService", "$location", "$anchorScroll", "$mdSidenav",AllResultsCtrl]);
    function AllResultsCtrl($timeout,RouteService, $location, $anchorScroll, $mdSidenav){

        var self = this;
        self.geo = RouteService.geo;
        self.tables = RouteService.tables;
        self.data = RouteService.AllData;
        self.randomText = "Map of the fifty states of the United States";

        self.items = [];
        for (var i = 0; i < 1000; i++) {
          self.items.push(i);
        };

        self.listLM = 
        [
            "Commuting", 
            "Public Sector Employment and Payroll",
            "Labor Force Statistics",
            "Industry and Class of Worker"
        ];

         self.listOfLinks = 
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

        self.scrollTo = function(id){
                $location.hash(id);
                
                $anchorScroll();
            };
            
            
            self.toggle = toggle;

            self.list = RouteService.data;

            function toggle(){
                 $mdSidenav('left').toggle();
            };

            RouteService.get().then(function(){
                self.list = RouteService.data;
                console.log(self.list);
            });

         RouteService.getGeo().then(function () {
            self.geo = RouteService.geo;
           // console.log(self.tables)
        });

        RouteService.getTables().then(function(){
            self.tables = RouteService.tables;
        });

         RouteService.getAllItems().then(function () {
            self.data = RouteService.AllData;
            console.log(self.data);
        });
    }
})();