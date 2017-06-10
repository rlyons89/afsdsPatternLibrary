(function(){
    'use strict';
    angular.module("USCBPttrn")
        .controller('gridListCtrl',[GridListCtrl]);

    function GridListCtrl(){
         $scope.isSmall = $mdMedia('xs');

        if( $mdMedia('xs') ){
            $scope.random = "hello world"
        }
            
    };
})();