var app = angular.module('myApp', ['ui.router']);

app.controller('rootController', ['$scope', '$state', function($scope, $state) {
    $scope.aVal = 10;
    $scope.bVal = 100;
}]);


app.config(function($stateProvider) {
    var loginState = {
        name: 'login',
        url: '/login',
        template: '<h3>Login Page</h3>'
    };

    
    $stateProvider.state(loginState);
});