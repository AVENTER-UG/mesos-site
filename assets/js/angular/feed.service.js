(function () {
    'use strict';

    angular
        .module('app')
        .factory('FeedService', FeedService);

    FeedService.$inject = ['$http', '$rootScope'];
    function FeedService($http, $rootScope) {
        var service = {};

        service.GetFeed = GetFeed;

        return service;

        function GetFeed(feed) {
            return $http.post($rootScope.env.API_SERVER+'/api/feed/v0', JSON.stringify({ url: feed.url })).then(handleSuccess, handleError('Error getting feed'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
