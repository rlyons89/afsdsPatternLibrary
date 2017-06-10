(function () {
    'use strict';
    angular.module('USCBPttrn')
        .component('uscbListItems', {
            bindings: {},
            controller: ["RouteService", ListItemCtrl],
            controllerAs: 'vm',
            templateUrl: "./app/list-items/uscb-list-item/uscb-list-item.html"
        });

    function ListItemCtrl(RouteService) {
        var self = this;
        self.tables = RouteService.geo;
        self.selectedItem;
        self.data = RouteService.AllData;

        self.dropDownItems = [
            { "title": "2015: ACS 5 Year summary" },
            { "title": "2015: ACS 1 Year summary" },
            { "title": "2014: ACS 5 Year summary" },
            { "title": "2014: ACS 1 Year summary" },
            { "title": "2013: ACS 5 Year summary" },
            { "title": "2013: ACS 1 Year summary" }
        ];
        RouteService.getGeo().then(function () {
            self.tables = RouteService.geo;
            console.log(self.tables)
        });

        RouteService.getAllItems().then(function () {
            self.data = RouteService.AllData;
            console.log(self.data);
        });

    };// end ctrl
})();