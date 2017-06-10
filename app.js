(function(){
    'use strict';
    angular.module('afsdsPttrn', ['ui.router','ngMaterial', 'duScroll'])
        .config(routeConfig);
        routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        function routeConfig($stateProvider, $urlRouterProvider){

            $stateProvider
                .state('home',{
                    url: "/home",
                    templateUrl: "app/main/main.component.html",
                    controller: "mainCtrl as vm",
                    cache: false
                }).state('home.patterns',{
                    url: "/patterns",
                    templateUrl: "app/home/afsds-home.html",
                    controller: "homeCtrl as vm",
                    cache: false
                })
                .state("home.buttons",{
                    url: '/buttons',
                    templateUrl: "app/buttons/afsds-button.html",
                    controller: "buttonCtrl as vm"
                })
                .state("home.colors",{
                    url:"/colors",
                    templateUrl: "app/colors/afsds.color.pallete.html",
                    controller: 'colorCtrl as vm'
                })
                .state('home.grids',{
                    url: '/grids',
                    templateUrl: "./app/GridList/afsds-gridlist.html",
                    controller: "gridListCtrl as vm"
                }).state('home.icon', {
                    url: '/icons',
                    templateUrl: './app/icons/afsds-icons.html',
                    controller: 'iconsCtrl as vm'
                }).state("home.layout",{
                    url: '/layout',
                    templateUrl: "app/layout/afsds-layout.html",
                    controller: "layoutCtrl as vm"
                })
                .state('home.forms',{
                    url: '/forms',
                    templateUrl: './app/forms-input/afsds-form-input.html',
                    controller: 'inputCtrl as vm'

                }).state("home.header",{
                    url: '/header',
                    templateUrl: "app/header/afsds-header.html",
                    controller: "headerCtrl as vm"
                }).state("home.footer",{
                    url: '/footer',
                    templateUrl: "app/footer/afsds-footer.html",
                    controller: "footerCtrl as vm"
                }).state("home.tooltips",{
                    url: '/tooltips',
                    templateUrl: "app/tooltips/afsds-tooltips.html",
                    controller: "tooltipsCtrl as vm"
                }).state("landing",{
                    url: '/landing',
                    templateUrl: "app/example-pages/landing-page/landing-page.component.html",
                    controller: "landingCtrl as vm"
                }).state('home.search',{
                    url: '/search',
                    templateUrl: './app/search/afsds-search-pattern.html',
                    controller: 'SearchCtrl as vm'
                }).state('home.chips',{
                    url: '/chips',
                    templateUrl: './app/chips/afsds-chips.html',
                    controller: 'chipsCtrl as vm'
                }).state('home.toasts',{
                    url: '/toasts',
                    templateUrl: './app/toasts/afsds-toasts.html',
                    controller: 'toastsCtrl as vm'
                }).state('home.tabs',{
                    url: '/tabs',
                    templateUrl: './app/tabs/afsds-tabs.html',
                    controller: 'tabsCtrl as vm'
                }).state('home.progress',{
                    url: '/progress',
                    templateUrl: './app/progress/afsds-progress.html',
                    controller: 'progressCtrl as vm'
                }).state('home.pagination',{
                    url: '/pagination',
                    templateUrl: './app/pagination/afsds-pagination.html',
                    controller: 'paginationCtrl as vm'
                }).state('home.typography',{
                    url: '/typography',
                    templateUrl: './app/typography/afsds-typography.html',
                    controller: 'typographyCtrl as vm'
                }).state('home.displayBanner',{
                    url: '/banner',
                    templateUrl: './app/display-banner/afsds-display-banner.html',
                    controller: 'DisplayBannerCtrl as vm'
                }).state("home.cards", {
                    url: "/cards",
                    templateUrl: "./app/cards/afsds-cards.html",
                    controller: "CardsCtrl as vm"
                });
        };
})();