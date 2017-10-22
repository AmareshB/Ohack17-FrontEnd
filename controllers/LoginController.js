var app = angular.module('Login', []);

app.controller('LoginController', ['$scope', '$location', 'utilsService',
    function($scope, $location, utilsService) {

        var init = function() {
            $scope.emailValue = "";
            $scope.pwdValue = "";
             $scope.error = "";
             $scope.currentUserSignedIn=false;
        }

        $scope.myfunc=function()
        {
                     var myEl = angular.element( document.querySelector( '#video-background' ) );
myEl.remove();
        }

        $scope.submit = function() {
             $scope.currentUserSignedIn=true;
var myEl = angular.element( document.querySelector( '#video-background' ) );
myEl.remove();

            console.log("in submit fn");
            console.log($scope.emailValue);
            if ($scope.emailValue != "" && $scope.pwdValue != "") {
                utilsService.login(
                    $scope.emailValue,
                    $scope.pwdValue
                ).success(function(response) {
                    $location.path('dashboard');
                     $scope.error = "";
                    

                }).error(function(error) {
                    console.log(error);
                    $scope.error = "Please enter valid Credentials";

                   //$location.path('dashboard');
                });;
            } else {

            }


        }

        $scope.register = function() {

            var myEl = angular.element( document.querySelector( '#video-background' ) );
myEl.remove();
            console.log("in submit fn");
            $location.path('register');
        }

        init();
    }
]);