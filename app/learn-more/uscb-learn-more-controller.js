(function(){
    'use strict';
    angular.module("USCBPttrn")
        .controller("LearnMoreCtrl", [LearnMoreCtrl]);
    
    function LearnMoreCtrl(){
        var self = this;

        self.list = 
        [
            "Communiting", 
            "Public Sector Employment and Payroll",
            "Labor Force Statistics",
            "Industry and class of Worker"
        ]
    };
})();