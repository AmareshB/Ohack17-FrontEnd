var app = angular.module('myApp', ['ui.router', 'DashBoard']);

app.controller('rootController', ['$scope', '$state', function($scope, $state) {
    $scope.aVal = 10;
    $scope.bVal = 100;



}]);


app.config(function($stateProvider) {
    var loginState = {
        name: 'login',
        url: '/login',
        template: '<h3>Login Page aa <a class="btn btn-default" href="#/product">More Info</a> </h3>'
    };

    var productState = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: './views/dashboard.html',
        controller: 'DashBoardController'
    };


    $stateProvider.state(loginState);
    $stateProvider.state(productState);
});