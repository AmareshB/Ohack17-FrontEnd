var app = angular.module('Login', []);

app.controller('LoginController', ['$scope', '$location',
    function($scope, $location) {

        var init = function() {
            alert("in alert of login");
            console.log("in init fn");
        }

        $scope.submit = function() {
            console.log("in submit fn");
           $location.path( 'dashboard' );
          //  $urlRouterProvider.when('/login', '/dashboard');
        }

        init();
    }
]);