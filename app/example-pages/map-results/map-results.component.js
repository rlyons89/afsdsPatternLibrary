(function () {
  'use strict';
  angular.module("USCBPttrn")
    .controller("mapResultsCtrl", ["$timeout", "RouteService", "$location", "$anchorScroll", "$mdSidenav", '$mdBottomSheet', '$mdMedia','$scope', function ($timeout, RouteService, $location, $anchorScroll, $mdSidenav, $mdBottomSheet, $mdMedia,$scope) {
      var vm = this;

      vm.toggle = toggle;

      vm.list = RouteService.data;
      vm.showResultsList = false;
      // vm.screenIsSmall = $mdMedia('xs');
      vm.screenIsSmall;

      $scope.$watch(function () { return $mdMedia('xs'); }, function (small) {
        vm.screenIsSmall = small;
      });
      function toggle() {
        $mdSidenav('left').toggle();
      };

      vm.toggleLeft3 = toggleLeft3;
      function toggleLeft3() {
        $mdSidenav('leftInner3').toggle();
      };

      vm.openBottomSheet2 = function () {
        vm.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'app/layout/bottom-sheet-templates/bottom-sheet-2.html',
          parent: angular.element(document.getElementById('bottom-sheet-wrapper-2')),
          controller: 'BottomSheet2Ctrl'
        }).then(function (clickedItem) {
          vm.alert = 'clicked!';
        }).catch(function (error) {
          //user clicked outside or hit escape                  
        });
      };

      vm.openBottomSheet3 = function () {
        vm.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'app/layout/bottom-sheet-templates/bottom-sheet-3.html',
          parent: angular.element(document.getElementById('bottom-sheet-wrapper-3')),
          controller: 'BottomSheet2Ctrl'
        }).then(function (clickedItem) {
          vm.alert = 'clicked!';
        }).catch(function (error) {
          //user clicked outside or hit escape                  
        });
      };

      RouteService.get().then(function () {
        vm.list = RouteService.data;
        console.log(vm.list);
      });

      vm.tables =
        [
          {
            "label": "Margin of Error for!!Female:!!Service occupations:!!Protective service occupations:!!Fire fighting and prevention, and other protective service workers including supervisors",
            "concept": "B24010I.  SEX BY OCCUPATION FOR THE CIVILIAN EMPLOYED POPULATION 16 YEARS AND OVER (HISPANIC OR LATINO)",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": true
          },
          {
            "label": "Total Groups Tallied:!!Micronesian:!!Other Micronesian",
            "concept": "B02019.  Native Hawaiian and Other Pacific Islander Alone or In Any Combination by Selected Groups",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "5 to 9",
            "concept": "B25032C.  UNITS IN STRUCTURE (AMERICAN INDIAN AND ALASKA NATIVE ALONE HOUSEHOLDER)",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "In the labor force:!!Employed:!!With a disability:!!With a hearing difficulty",
            "concept": "B18120.  Employment Status by Disability Status and Type",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Latin America:!!Central America:!!Mexico:!!Entered before 1990:",
            "concept": "B05007. Place of Birth by Year of Entry by Citizenship Status for the Foreign-Born Population",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Did not work:!!Male:!!65 years and over:!!With public coverage",
            "concept": "B27014.  Public Health Insurance by Work Experience by Sex by Age",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Total Groups Tallied:!!Micronesian:!!Marshallese",
            "concept": "B02019.  Native Hawaiian and Other Pacific Islander Alone or In Any Combination by Selected Groups",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Car, truck, or van - carpooled:!!Speak only English",
            "concept": "C08513.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH FOR WORKPLACE GEOGRAPHY",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Housing units with a mortgage:!!$4,000 or more",
            "concept": "B25087. Mortgage Status and Selected Monthly Owner Costs",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Latin America:!!Central America:!!Mexico:!!Entered before 1990:",
            "concept": "B05007. Place of Birth by Year of Entry by Citizenship Status for the Foreign-Born Population",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Did not work:!!Male:!!65 years and over:!!With public coverage",
            "concept": "B27014.  Public Health Insurance by Work Experience by Sex by Age",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Molders and molding machine setters, operators, and tenders, metal and plastic",
            "concept": "B24126.  Detailed Occupation for the Full-Time, Year-Round Civilian Employed Female Population 16 Years and Over",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Car, truck, or van - carpooled:!!Speak only English",
            "concept": "C08513.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH FOR WORKPLACE GEOGRAPHY",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Male:!!$45,000 to $49,999",
            "concept": "B20001. Sex by Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) for the Population 16 Years and Over With Earnings in the Past 12 Months",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "With Supplemental Security Income (SSI)",
            "concept": "B19056.  Supplemental Security Income (SSI) for Households",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Housing units with a mortgage:!!$4,000 or more",
            "concept": "B25087. Mortgage Status and Selected Monthly Owner Costs",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          },
          {
            "label": "Margin of Error for!!Total:",
            "concept": "B19056.  Supplemental Security Income (SSI) for Households",
            "predicateType": "int",
            "category": "geo",
            "tableID": "B02019",
            "showExpandedOptions": false
          }
        ];

      vm.datasets = [
        { "label": '2014: ACS 5-Year Summary File' },
        { "label": '2013: ACS 5-Year Summary File' },
        { "label": '2012: ACS 5-Year Summary File' },
        { "label": '2011: ACS 5-Year Summary File' },
        { "label": '2010: ACS 5-Year Summary File' }
      ];

      vm.dataset = { "label": '2014: ACS 5-Year Summary File' };

      vm.showExpandedOptions = function (item) {
        for (var i = 0; i < vm.tables.length; i++) {
          vm.tables[i].showExpandedOptions = false;
        };

        item.showExpandedOptions = true;
      };




    }]);// end controller 



})();