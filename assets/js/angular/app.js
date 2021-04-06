(function () {
    'use strict';

    angular
        .module('app',['ngMaterial', 'LocalStorageModule', 'angular-popover', 'ngSanitize'])
        .config(config)
        .run(run);

    config.$inject = ['$mdThemingProvider', '$locationProvider', 'localStorageServiceProvider'];

    function config($mdThemingProvider, $locationProvider, $localStorageServiceProvider) {    
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('grey');
        $locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: false });

        $localStorageServiceProvider
        .setPrefix('aventer');
    }

    run.$inject = ['$rootScope', '$mdToast', 'localStorageService', 'FeedService'];
    function run($rootScope, $mdToast, localStorageService, FeedService) { 
        $rootScope.globals = {};
        $rootScope.env = {
            "API_SERVER": "https://www.aventer.biz",
        };

        $rootScope.feed1 = {};
        $rootScope.feed1.url = 'https://www.arcanoae.com/feed/';

        FeedService.GetFeed($rootScope.feed1).then(function(res){
            $rootScope.feed1.content = res;
        })
    }

})();
