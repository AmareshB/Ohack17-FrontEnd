var app = angular.module('adminLogin', []);

app.controller('AdminLoginController', ['$scope', '$location', 'utilsService',
    function($scope, $location, utilsService) {

        var init = function() {
            $scope.emailValue = "";
            $scope.pwdValue = "";
        }

        $scope.submit = function() {
            console.log("in submit fn");
            console.log($scope.emailValue);
            $location.path('adminDashboard');
            /*if ($scope.emailValue != "" && $scope.pwdValue != "") {
                utilsService.login().success(function() {
                    $location.path('dashboard');
                });
            } else { // TODO remove this
            	console.log("in here else part");
               $location.path('adminDashboard');
            }*/


        }

        $scope.register = function() {
            console.log("in submit fn");
            $location.path('register');
        }

        init();
    }
]);