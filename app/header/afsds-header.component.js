(function () {
    'use strict';
    angular.module("afsdsPttrn")
        .controller("headerCtrl", ["RouteService",function (RouteService) {

            var self = this;
            self.selectedItem;
            self.noCache = false;
            self.searchText;



            self.AllArrays = RouteService.AllData;

            RouteService.getAllItems().then(function () {
                self.AllArrays = RouteService.AllData;
                console.log(self.AllArrays);

            });
        }]);
})();