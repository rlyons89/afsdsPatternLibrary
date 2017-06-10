(function () {
    'use strict';
    angular.module("USCBPttrn")
        .controller("inputCtrl", [InputCtrl]);

    function InputCtrl() {
        var self = this;

        self.user = {};
        self.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
                return { abbrev: state };
            });

        self.data = {
            cb1: true,
            cb4: true,
            cb5: false
          };       

    };// end function
})();