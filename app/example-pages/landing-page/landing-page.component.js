(function () {
    'use strict';
    angular.module("afsdsPttrn")
        .controller("landingCtrl", ["$timeout","RouteService", "$location", "$anchorScroll", "$mdSidenav", "$scope", function ($timeout,RouteService, $location, $anchorScroll, $mdSidenav, $scope) {
            var vm = this;
            
            vm.scrollTo = function(id){
                $location.hash(id);
                
                $anchorScroll();
            };
            
            
            vm.toggle = toggle;

            vm.list = RouteService.data;

            function toggle(){
                 $mdSidenav('left').toggle();
            };

            RouteService.get().then(function(){
                vm.list = RouteService.data;
                console.log(vm.list);
            });
            
            
            vm.searchTerm = '';
            
        }]);// end controller 
})();