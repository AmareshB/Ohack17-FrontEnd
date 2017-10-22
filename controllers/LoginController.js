var app = angular.module('Login', []);

app.controller('LoginController', ['$scope',
    function($scope) {

        var init = function() {
            alert("in alert of login");
            console.log("in init fn");
        }

        init();
    }
]);