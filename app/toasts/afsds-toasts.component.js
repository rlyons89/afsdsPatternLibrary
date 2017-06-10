(function () {
    'use strict';
    angular.module("afsdsPttrn")
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
                    //templateUrl: 'app/Toasts/afsds-warn-toast.html'
                    template:   '<md-toast class="afsds-warn-toast">' +
                                '<i class="fa fa-exclamation-triangle fa-lg" aria-hidden="true"></i>'+
                                '<span class="md-toast-text" flex> <b> Warning: </b>  Lorem ipsum dolor sit</span>'+
                                '</md-toast>'
                });
            };

            vm.showSuccessToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/afsds-success-toast.html'
                    template:   '<md-toast class="afsds-success-toast">' +
                                '<i class="fa fa-check fa-lg" aria-hidden="true"></i>' +
                                '<span class="md-toast-text" flex> <b> Success: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };

            vm.showInfoToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/afsds-info-toast.html'
                    template:   '<md-toast class="afsds-info-toast">'+
                                '<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>' +
                                '<span class="md-toast-text" flex> <b> Info: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };

              vm.showErrorToast = function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'top right',
                    //templateUrl: 'app/Toasts/afsds-error-toast.html'
                    template:   '<md-toast class="afsds-error-toast">'+
                                '<i class="fa fa-ban fa-lg" aria-hidden="true"></i>'+
                                '<span class="md-toast-text" flex> <b> Error: </b>  Lorem ipsum dolor sit</span>' +
                                '</md-toast>'
                });
            };


        });
})();