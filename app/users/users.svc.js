/**
 * This service for work with External storage.
 */

(function () {
    'use strict';

    angular
        .module('myApp.users')
        .factory('usersSvc', Service);

    function Service($http) {

        var factory = {};

        factory.getUsers = function () {
            return $http.get('content.json');
        };

        factory.remove = function (username) {
            //..
        };
        factory.add = function (username) {
            //..
        };
        factory.edit = function (username) {
            //..
        };

        return factory;

    }

})();


