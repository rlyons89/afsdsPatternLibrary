(function(){
    'use strict';
    angular.module("USCBPttrn")
        .controller("CardsCtrl", [CardsCtrl]);
    function CardsCtrl(){
        var self = this;

        self.randomText = "Map of the fifty states of the United States";

        self.items = [];
        for (var i = 0; i < 1000; i++) {
          self.items.push(i);
        };
        
        
        self.tables = 
        [
          {
            "label": "Margin of Error for!!Female:!!Service occupations:!!Protective service occupations:!!Fire fighting and prevention, and other protective service workers including supervisors",
            "concept": "B24010I.  SEX BY OCCUPATION FOR THE CIVILIAN EMPLOYED POPULATION 16 YEARS AND OVER (HISPANIC OR LATINO)",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Total Groups Tallied:!!Micronesian:!!Other Micronesian",
            "concept": "B02019.  Native Hawaiian and Other Pacific Islander Alone or In Any Combination by Selected Groups",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "5 to 9",
            "concept": "B25032C.  UNITS IN STRUCTURE (AMERICAN INDIAN AND ALASKA NATIVE ALONE HOUSEHOLDER)",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "In the labor force:!!Employed:!!With a disability:!!With a hearing difficulty",
            "concept": "B18120.  Employment Status by Disability Status and Type",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Latin America:!!Central America:!!Mexico:!!Entered before 1990:",
            "concept": "B05007. Place of Birth by Year of Entry by Citizenship Status for the Foreign-Born Population",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Did not work:!!Male:!!65 years and over:!!With public coverage",
            "concept": "B27014.  Public Health Insurance by Work Experience by Sex by Age",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Total Groups Tallied:!!Micronesian:!!Marshallese",
            "concept": "B02019.  Native Hawaiian and Other Pacific Islander Alone or In Any Combination by Selected Groups",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Car, truck, or van - carpooled:!!Speak only English",
            "concept": "C08513.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH FOR WORKPLACE GEOGRAPHY",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Housing units with a mortgage:!!$4,000 or more",
            "concept": "B25087. Mortgage Status and Selected Monthly Owner Costs",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Latin America:!!Central America:!!Mexico:!!Entered before 1990:",
            "concept": "B05007. Place of Birth by Year of Entry by Citizenship Status for the Foreign-Born Population",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Did not work:!!Male:!!65 years and over:!!With public coverage",
            "concept": "B27014.  Public Health Insurance by Work Experience by Sex by Age",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Molders and molding machine setters, operators, and tenders, metal and plastic",
            "concept": "B24126.  Detailed Occupation for the Full-Time, Year-Round Civilian Employed Female Population 16 Years and Over",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Car, truck, or van - carpooled:!!Speak only English",
            "concept": "C08513.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH FOR WORKPLACE GEOGRAPHY",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Male:!!$45,000 to $49,999",
            "concept": "B20001. Sex by Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) for the Population 16 Years and Over With Earnings in the Past 12 Months",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "With Supplemental Security Income (SSI)",
            "concept": "B19056.  Supplemental Security Income (SSI) for Households",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Housing units with a mortgage:!!$4,000 or more",
            "concept": "B25087. Mortgage Status and Selected Monthly Owner Costs",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          },
          {
            "label": "Margin of Error for!!Total:",
            "concept": "B19056.  Supplemental Security Income (SSI) for Households",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019"
          }
        ];
        
    };
    
})();