(function(){
    'use strict';

    angular.module('USCBPttrn')
        .controller('WebpagesCtrl', ["RouteService",WebpagesCtrl]);

    function WebpagesCtrl(RouteService){
        var self = this;
        self.data = RouteService.AllData;

        RouteService.getAllItems().then(function(){
            self.data = RouteService.AllData;
            console.log(self.data);
        });
    };  
})();