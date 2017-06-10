(function(){
    'use strict';
    angular.module("afsdsPttrn")
        .controller("colorCtrl",["RouteService",ColorController]);

        function ColorController(RouteService){
            var vm = this;

             vm.colorList = RouteService.colors;
             
            RouteService.getColors().then(function(colorData){
                vm.colorList = RouteService.colors;
                console.log(vm.colorList);
            });
           
        };  
})();