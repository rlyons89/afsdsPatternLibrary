(function(){
    'use strict';
    angular.module('USCBPttrn')
        .directive('toggleShow',function(){
            return {
                scope: {},
                restrict: 'AE',
                link: Link
            };

            function Link(scope, element, attrs){
                element.bind('click', function(){
                    console.log(element)
                    // element.next("ul").css('display', 'none');
                    element.next().toggleClass('displayNone');
                });
            }; // end Link
        }); // End directive

})();