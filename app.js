(function(){
    'use strict';
    angular.module('USCBPttrn', ['ui.router','ngMaterial', 'duScroll'])
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
                    templateUrl: "app/home/uscb-home.html",
                    controller: "homeCtrl as vm",
                    cache: false
                })
                .state("home.buttons",{
                    url: '/buttons',
                    templateUrl: "app/buttons/uscb.button.html",
                    controller: "buttonCtrl as vm"
                })
                .state("home.colors",{
                    url:"/colors",
                    templateUrl: "app/colors/uscb.color.pallete.html",
                    controller: 'colorCtrl as vm'
                })
                .state('home.grids',{
                    url: '/grids',
                    templateUrl: "./app/GridList/uscb-gridlist.html",
                    controller: "gridListCtrl as vm"
                })
                .state('home.checkbox',{
                    url:'/checkbox',
                    templateUrl: './app/checkbox/uscb-checkbox.html',
                    controller: 'checkboxCtrl as vm'
                })
                .state('home.icon', {
                    url: '/icons',
                    templateUrl: './app/icons/uscb-icons.html',
                    controller: 'iconsCtrl as vm'
                }).state("home.layout",{
                    url: '/layout',
                    templateUrl: "app/layout/uscb-layout.html",
                    controller: "layoutCtrl as vm"
                })
                .state('home.forms',{
                    url: '/forms',
                    templateUrl: './app/forms-input/uscb-form-input.html',
                    controller: 'inputCtrl as vm'

                })
                .state('home.accordion',{
                    url: '/accordion',
                    templateUrl: './app/accordion/uscb-accordion.html',
                    controller: 'AccordionCtrl as vm'

                }).state("home.header",{
                    url: '/header',
                    templateUrl: "app/header/uscb-header.html",
                    controller: "headerCtrl as vm"
                }).state("home.footer",{
                    url: '/footer',
                    templateUrl: "app/footer/uscb-footer.html",
                    controller: "footerCtrl as vm"
                }).state("home.tooltips",{
                    url: '/tooltips',
                    templateUrl: "app/tooltips/uscb-tooltips.html",
                    controller: "tooltipsCtrl as vm"
                }).state("landing",{
                    url: '/landing',
                    templateUrl: "app/example-pages/landing-page/landing-page.component.html",
                    controller: "landingCtrl as vm"
                }).state("tableResults",{
                    url: '/tableResults',
                    templateUrl: "app/example-pages/table-results/table-results.component.html",
                    controller: "tableResultsCtrl as vm"
                }).state("mapResults",{
                    url: '/mapResults',
                    templateUrl: "app/example-pages/map-results/map-results.component.html",
                    controller: "mapResultsCtrl as vm"
                }).state('home.search',{
                    url: '/search',
                    templateUrl: './app/search/uscb-search-pattern.html',
                    controller: 'SearchCtrl as vm'
                }).state('home.customsearch',{
                    url: "/customSearch",
                    templateUrl: "./app/customSearch/uscb-custom-search.html",
                    controller: 'CustomSearchCtrl as vm'
                })
                .state('home.listitems',{
                    url: "/listitems",
                    controller: 'ListItemsCtrl as vm',
                    templateUrl: './app/list-items/uscb-list-items.html',
                }).state('home.chips',{
                    url: '/chips',
                    templateUrl: './app/chips/uscb-chips.html',
                    controller: 'chipsCtrl as vm'
                }).state('home.toasts',{
                    url: '/toasts',
                    templateUrl: './app/toasts/uscb-toasts.html',
                    controller: 'toastsCtrl as vm'
                })
                .state("home.webpages", {
                    url: 'webpages',
                    templateUrl: './app/webpages/webpages.html',
                    controller: 'WebpagesCtrl as vm'
                }).state('home.tabs',{
                    url: '/tabs',
                    templateUrl: './app/tabs/uscb-tabs.html',
                    controller: 'tabsCtrl as vm'
                }).state('home.progress',{
                    url: '/progress',
                    templateUrl: './app/progress/uscb-progress.html',
                    controller: 'progressCtrl as vm'
                }).state('home.pagination',{
                    url: '/pagination',
                    templateUrl: './app/pagination/uscb-pagination.html',
                    controller: 'paginationCtrl as vm'
                }).state('home.typography',{
                    url: '/typography',
                    templateUrl: './app/typography/uscb-typography.html',
                    controller: 'typographyCtrl as vm'
                }).state('home.displayBanner',{
                    url: '/banner',
                    templateUrl: './app/display-banner/uscb-display-banner.html',
                    controller: 'DisplayBannerCtrl as vm'
                })
                .state("home.quickfacts", {
                    url: '/featuredresults',
                    templateUrl: './app/quick-stats/quick-stats.html',
                    controller: 'QuickFacts as vm'
                })
                .state("home.relatedsearch", {
                    url: "/relatedSearch",
                    templateUrl: "./app/related-search/related-search.html",
                    controller: "RelatedSearchCTRL as vm"
                })
                .state("home.learnmore",{
                    url: "/learnmore",
                    templateUrl: "./app/learn-more/uscb-learn-more.html",
                    controller: "LearnMoreCtrl as vm"
                })
                .state("home.cards", {
                    url: "/cards",
                    templateUrl: "./app/cards/uscb-cards.html",
                    controller: "CardsCtrl as vm"
                })
                .state("allresults",{
                    url: "/allresults",
                    templateUrl: "./app/example-pages/all-results/all-results.html",
                    controller: "AllResultsCtrl as vm"
                })
                .state("home.disambiguation",{
                    url: "disambiguation",
                    templateUrl: "./app/disambiguation-section/disambiguation.comp.html",
                    controller: "DisambiguationCtrl as vm"
                })
                .state("geoprofile",{
                    url: "/geoprofile",
                    templateUrl: "./app/example-pages/geo-profile/geo-profile.comp.html",
                    controller: "GeoProfileCtrl as vm"
                });
            

        };
})();