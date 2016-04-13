(function () {
    'use strict';

    angular
        .module('myApp.users')
        .controller('users.ctrl', Controller);

    function Controller($scope, usersSvc, usersStoreSvc) {

        usersSvc.getUsers()
            .success(function (data) {
                $scope.collection = data;
                usersStoreSvc.setData(data);
            });

        $scope.removeUser = function (username) {
            // usersSvc.remove(username)
            //     .success(function (data) {
            //         $scope.collection = data;
            //     });
            $scope.collection = usersStoreSvc.remove(username);
            
        };

        $scope.editUser = function () {
            // usersSvc.edit(username)
            //     .success(function (data) {
            //         $scope.collection = data;
            //     });

            $scope.collection = usersStoreSvc.edit($scope.tempUser);
            // $scope.tempUser = {};
        };

        $scope.addUser = function () {


            // usersSvc.add(user)
            //     .success(function (data) {
            //         $scope.collection = data;
            //     });

            $scope.collection = usersStoreSvc.add($scope.tempUser);
            $scope.tempUser = {};
        };

        $scope.tempUser = {};

    }
})();
