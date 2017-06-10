(function(){
    'use strict';
    angular.module('USCBPttrn')
        .service('GetHeightService', function(){
            var heightElements = {};

            var allElements = {};

            /**
             * @name: add
             * @desc: adds a new object property to heightElements.allElements
             */
             function add(name, val){
                allElements[name] = val;
            };

            return {
                allElements: heightElements,
                addElement: add

            } 
        })
})();