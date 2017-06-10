(function () {
    'use strict';
    angular.module("afsdsPttrn")
        .controller('SearchCtrl', ["RouteService", searchCtrl]);

    function searchCtrl(RouteService) {
        var self = this;
        self.selectedItem;
        self.noCache = false;
        self.searchText;
        


        self.AllArrays = RouteService.AllData;

        RouteService.getAllItems().then(function () {
            self.AllArrays = RouteService.AllData;
            console.log(self.AllArrays);

        });

        
    } // end controller
})();