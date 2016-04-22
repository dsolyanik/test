(function () {
    'use strict';

    angular.module('myApp').config(['$translateProvider', Config]);

    function Config($translateProvider) {
        $translateProvider.translations('en', {
            'manage_users': 'Manage users:',
            'name': 'Name',
            'permissions': 'Permissions',
            'actions': 'Actions',
            'create': 'Create new user',
            'add': 'Add',
            'edit': 'Edit',
            'close': 'Close',
            'enter_name': 'Enter user name',
            'enter_perm': 'Enter permissions'
        });

        $translateProvider.translations('il', {
            'manage_users': 'ניהול משתמשים:',
            'name': 'שֵׁם',
            'permissions': 'הרשאות',
            'actions': 'פעולות',
            'create': 'צור משתמש חדש',
            'add': 'לְהוֹסִיף',
            'edit': 'לַעֲרוֹך',
            'close': 'לִסְגוֹר',
            'enter_name': 'הזן את שם המשתמש',
            'enter_perm': 'זן הרשאות'
        });

        $translateProvider.translations('ru', {
            'manage_users': 'Управление пользователями:',
            'name': 'Имя',
            'permissions': 'Права',
            'actions': 'Действие',
            'create': 'Создать нового пользователя',
            'add': 'Добавить',
            'edit': 'Редактировать',
            'close': 'Закрыть',
            'enter_name': 'Введите имя пользователя',
            'enter_perm': 'Введите права'
        });

        $translateProvider.preferredLanguage('en');
    }
})();
