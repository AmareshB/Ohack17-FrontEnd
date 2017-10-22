var app = angular.module('Login', []);

app.controller('LoginController', ['$scope', '$location', 'utilsService',
    function($scope, $location, utilsService) {

        var init = function() {
            $scope.emailValue = "";
            $scope.pwdValue = "";
        }

        $scope.submit = function() {
            console.log("in submit fn");
            console.log($scope.emailValue);
            if ($scope.emailValue != "" && $scope.pwdValue != "") {
                utilsService.login().success(function() {
                    $location.path('dashboard');
                });
            } else {	// TODO remove this
            	 utilsService.login().success(function() {
                    $location.path('dashboard');
                });
            }


        }

        $scope.register = function() {
            console.log("in submit fn");
            $location.path('register');
        }

        init();
    }
]);