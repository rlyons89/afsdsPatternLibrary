(function(){
    'use strict';
    angular.module("afsdsPttrn")
        .component("colorHelper",{
            bindings: {
                colorlist:'<'
            },
            controller: ["RouteService",ColorHelperComp],
            controllerAs: "vm",
            templateUrl: "./app/colors/color-helper-component/color.helper.component.html"
        });

        function ColorHelperComp(RouteService){
            var vm = this;
            
        }
})();