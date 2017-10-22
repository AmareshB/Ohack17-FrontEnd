var app = angular.module('DashBoard', []);

app.controller('DashBoardController', ['$scope', 'utilsService',
    function($scope, utilsService) {


        var init = function() {
            $scope.clientAvail = "";
            console.log("in init fn");
            //$scope.historyData = data;
            //console.log($scope.historyData);
            getData();

            $scope.$watch('clientAvail', function(newVal) {
                putData();
            });

        };

        $scope.showFeedBack = function(history) {
           // $dialog.dialog({}).open('modalContent.html');
           $scope.feedback = history.feedback;
           $scope.showFeedBackDiv = true;
        }

        $scope.submitAvailability = function() {
        	putData($scope.clientAvail);
        }


        var putData = function(availabilityData) {
            //utilsService.getClientHistory();
            //TODO : post data here and redirect to Thank you page.
        }
        var getData = function() {
            console.log("in here ");
            /*utilsService.getClientHistory()
                .success(function(response) {
                    $scope.historyData = response;
                });*/
            $scope.historyData = utilsService.getClientHistory();

        };


        init();
    }
]);