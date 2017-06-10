(function () {
    'use strict';
    angular.module("USCBPttrn")
        .controller("toastsCtrl", function ($mdToast) {
            var vm = this;
            vm.showToast = function () {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('This geographic area is not available at the current zoom level')
                        .position("top right")
                        .hideDelay(4000)
                );
            };

            vm.showWarnToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/uscb-warn-toast.html'
                    template:   '<md-toast class="uscb-warn-toast">' +
                                '<i class="fa fa-exclamation-triangle fa-lg" aria-hidden="true"></i>'+
                                '<span class="md-toast-text" flex> <b> Warning: </b>  Lorem ipsum dolor sit</span>'+
                                '</md-toast>'
                });
            };

            vm.showSuccessToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/uscb-success-toast.html'
                    template:   '<md-toast class="uscb-success-toast">' +
                                '<i class="fa fa-check fa-lg" aria-hidden="true"></i>' +
                                '<span class="md-toast-text" flex> <b> Success: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };

            vm.showInfoToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/uscb-info-toast.html'
                    template:   '<md-toast class="uscb-info-toast">'+
                                '<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>' +
                                '<span class="md-toast-text" flex> <b> Info: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };

              vm.showErrorToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/uscb-error-toast.html'
                    template:   '<md-toast class="uscb-error-toast">'+
                                '<i class="fa fa-ban fa-lg" aria-hidden="true"></i>'+
                                '<span class="md-toast-text" flex> <b> Error: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };


        });
})();