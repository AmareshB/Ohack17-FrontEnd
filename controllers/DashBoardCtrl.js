var app = angular.module('DashBoard', []);

app.controller('DashBoardController', ['$scope',
    function($scope) {

        var init = function() {
            alert("in alert of dashboard");
            console.log("in init fn");
        }

        init();
    }
]);