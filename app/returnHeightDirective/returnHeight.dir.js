(function () {
    'use strict';
    angular.module('USCBPttrn')
        .directive('returnHeight', function () {
            return {
                restrict: 'AE',
                link: link
            }

            function link(scope, element, attrs) {
                scope.style = {};
                scope.$watch(function () {
                    if (element[0].offsetHeight < 500) {
                        // scope.style = {
                        //     'max-height': '900px'
                        // }
                        
                        scope.style[element[0].id] = {
                           'max-height': '900px' 
                        }
                    } else {
                        // scope.style = {
                        //     'max-height': element[0].offsetHeight + 'px'
                        // }
                        
                         scope.style[element[0].id] = {
                           'max-height': element[0].offsetHeight + 'px'
                        }
                    }
                    // if(element[0].offsetHeight < 500){
                        
                    //     GetHeightService.addElement(element.context.id, '900px');
                    // }else{
                    //     GetHeightService.addElement(element.context.id, element[0].offsetHeight + 'px');
                    // }
                })
            }
        })

})();