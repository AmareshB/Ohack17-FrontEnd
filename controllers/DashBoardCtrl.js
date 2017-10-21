var app = angular.module('myApp', []);

app.controller('DashBoardController', ['$scope',
    function($scope) {

        var init = function() {

            alert("in alert of dashboard");

        }

        init();
    }
]);