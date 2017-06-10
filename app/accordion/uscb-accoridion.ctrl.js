(function () {
    'use strict';
    angular.module('USCBPttrn')
        .controller('AccordionCtrl', ["RouteService", AccordionCtrl]);

    function AccordionCtrl(RouteService) {
        var self = this;

        self.data = RouteService.accordionValues;
        self.isEmptyArray = isEmptyArray;
        self.testClick = testClick;

        RouteService.getAccordionValues().then(function () {
            self.data = RouteService.accordionValues;
            console.log(self.data);
        });

        function isEmptyArray(dataArray) {
            if (dataArray.hasOwnProperty('children')) {

                if (dataArray.children.length == 0) {
                    return true;
                } else {
                    return false;
                }
                
            }else{
                return true;
            }

        };

        function testClick(evt){
            console.log(evt);
        }
    };// end ctrl

})();