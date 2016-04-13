/**
 * This service for work with something like "storage on client side".
 */

(function () {
    'use strict';

    angular
        .module('myApp.users')
        .factory('usersStoreSvc', Service);

    function Service($http) {

        var factory = {};



        factory.remove = function (username) {
            factory.users = factory.users.filter(function( obj ) {
                return obj.username !== username;
            });

            return factory.users;
        };

        factory.add = function (user) {

            factory.users.push(angular.copy(user));

            return factory.users;
        };

        factory.edit = function (user) {

            for (var i in factory.users) {
                if (factory.users[i].username == user.username) {
                    factory.users[i].permissions = user.permissions;
                    break;
                }
            }

            return factory.users;
        };
        factory.setData = function (data) {
            factory.users = data;
        };

        return factory;

    }

})();


