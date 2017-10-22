var app = angular.module('utils', []);

app.service('utilsService', function($http) {

    this.getClientHistory = function() {

        console.log("in servcies");
        //return $http.get('/util/categoryColors');

      /* $http.get('http://10.143.191.81:8082/').success(function(response) {
            console.log(response);
        });
*/
        var data = [{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "12",
            feedback:"asd"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "23"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "234d",
            feedback:"123445dsaf"
        },{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "12",
            feedback:"asd"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "23"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "234d",
            feedback:"123445dsaf"
        },{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "12",
            feedback:"asd"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "23"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "234d",
            feedback:"123445dsaf"
        },{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "12",
            feedback:"asd"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "23"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "234d",
            feedback:"123445dsaf"
        },{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "12",
            feedback:"asd"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "23"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "234d",
            feedback:"123445dsaf"
        }];

        return data;

    };


});