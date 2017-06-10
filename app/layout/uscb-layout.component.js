(function(){
    'use strict';
    angular.module("USCBPttrn")
        .controller("layoutCtrl",["$mdSidenav", "$mdBottomSheet", function($mdSidenav, $mdBottomSheet){
            var vm = this;
            vm.toggleLeft = toggleLeft;
            function toggleLeft(){
                 $mdSidenav('leftInner').toggle();
            };
            
            vm.toggleLeft2 = toggleLeft2;
            function toggleLeft2(){
                 $mdSidenav('leftInner2').toggle();
            };
            
            vm.toggleLeft3 = toggleLeft3;
            function toggleLeft3(){
                 $mdSidenav('leftInner3').toggle();
            };
                                  
            vm.openBottomSheet1 = function(){
                vm.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'app/layout/bottom-sheet-templates/bottom-sheet-1.html',
                    parent: angular.element(document.getElementById('bottom-sheet-wrapper-1')),
                    controller: 'BottomSheet1Ctrl'
                }).then (function(clickedItem){
                    vm.alert = 'clicked!';              
                }).catch(function(error){
                    //user clicked outside or hit escape                  
                });
            }
 
            vm.openBottomSheet2 = function(){
                vm.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'app/layout/bottom-sheet-templates/bottom-sheet-2.html',
                    parent: angular.element(document.getElementById('bottom-sheet-wrapper-2')),
                    controller: 'BottomSheet2Ctrl'
                }).then (function(clickedItem){
                    vm.alert = 'clicked!';                         
                }).catch(function(error){
                    //user clicked outside or hit escape                  
                });
            }
            
            vm.openBottomSheet3 = function(){
                vm.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'app/layout/bottom-sheet-templates/bottom-sheet-2.html',
                    parent: angular.element(document.getElementById('bottom-sheet-wrapper-3')),
                    controller: 'BottomSheet2Ctrl'
                }).then (function(clickedItem){
                    vm.alert = 'clicked!';                         
                }).catch(function(error){
                    //user clicked outside or hit escape                  
                });
            }
            
        }])
        
        .controller('BottomSheet1Ctrl', function($scope, $mdBottomSheet) {

              
            })
    
        .controller('BottomSheet2Ctrl', function($scope, $mdBottomSheet) {

             
            });
})();