(function () {
    'use strict';

    angular.module("USCBPttrn")
        .component("displayWrapper", {
            bindings: {
                title:'@'
            },
            controller: ["$scope","$location", "$anchorScroll", displayWrapperCtrl],
            templateUrl: './app/display-wrapper/display-wrapper.component.html',
            controllerAs: "vm",
            transclude: {
                code: 'uscbCode',
                description: 'uscbDescription',
                demo: 'uscbDemo'
            }
        });

    function displayWrapperCtrl($scope, $location, $anchorScroll) {
        var self = this;
        self.showCode = false;
        self.toggleCodeView = toggleCodeView;
        self.scrollTo = scrollTo;
        console.log($scope.title)

        function toggleCodeView(){
            self.showCode = !self.showCode;
        };
            
        function scrollTo(id){
            $location.hash(id);

            $anchorScroll();
            console.log('scrolled!');
            
        };
    };
})();