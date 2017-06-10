(function(){
    'use strict';
    angular.module("afsdsPttrn")
        .service("RouteService", ["$http",RouteService]);

        function RouteService($http){

            var routerService = {};
            var root = 'https://jsonplaceholder.typicode.com';
            routerService.data = [];
            routerService.colors = [];
            routerService.accordionValues = [];
            routerService.topics = [];
            routerService.tables = [];
            routerService.geo = [];
            routerService.AllData = [];

            routerService.get = function(){
               return $http.get("app/data/routes.json").then(function(data){
                   routerService.data = data.data;
               });
            };

            routerService.getColors = function(){
                return $http.get("app/data/colors.json").then(function(colors){
                    routerService.colors = colors.data ;
                });
            };

            routerService.getAccordionValues = function(){
                return $http.get("app/data/accordion.json").then(function(values){
                    routerService.accordionValues = values.data;
                });
            };

            routerService.getTopics = function(){
                return $http.get("app/data/topics.json").then(function(response){
                    routerService.topics = response.data;
                });
            };

            routerService.getGeo = function(){
                return $http.get("app/data/geography.json").then(function(response){
                    routerService.geo = response.data
                });
            };

            routerService.getTables = function(){
                return $http.get("app/data/table.json").then(function(response){
                    routerService.tables = response.data;
                });
            };

            routerService.getAllItems = function(){
                return $http.get("app/data/data-set.json").then(function(response){
                    routerService.AllData = response.data;
                }); 
            };
            return routerService;

        }; //end RouteService function
})();