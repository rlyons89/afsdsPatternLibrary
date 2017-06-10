(function () {
    'use strict';
    angular.module("USCBPttrn")
        .controller("mainCtrl", ["$timeout", "$mdSidenav","RouteService", function ($timeout, $mdSidenav,RouteService) {
            var vm = this;
            vm.toggle = toggle;

            vm.list = RouteService.data;

            function toggle(){
                 $mdSidenav('left').toggle();
            };

            RouteService.get().then(function(){
                vm.list = RouteService.data;
                console.log(vm.list);
            });
            
        }]);// end controller 
})();