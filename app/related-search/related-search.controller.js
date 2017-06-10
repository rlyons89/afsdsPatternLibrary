(function(){
    'use strict'
    angular.module("USCBPttrn")
        .controller("RelatedSearchCTRL", [RelatedSearchCTRL]);
    
    function RelatedSearchCTRL(){
        var self = this;

        self.listOfLinks = 
        [
            {
                "text": "Michigan employment",
                "link": "by age"
            },
            {"text":"Michigan employment","link": "by race"},
            {"text": "Michigan employment", "link": "by county"},
            {"text": "employment", "link": "United States"},
            {"text": "Michigan Employment", "link": "and median income"},
            {"text": "Michigan Employment", "link": "median age of worker"},
            {"text":"Michigan Employment", "link": "of people in poverty"},
            {"text": "Michigan employment", "link": "by educational attainment"}
        ]
    };

})();