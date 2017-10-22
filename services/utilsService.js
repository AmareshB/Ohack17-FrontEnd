var app = angular.module('utils', []);

app.service('utilsService', function($http) {

    this.getClientHistory = function() {

        console.log("in servcies");
        //return $http.get('/util/categoryColors');

        /*  $http.get('http://10.143.191.81:8082/').success(function(response) {
              console.log(response);
          });*/

        var data = [{
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd1",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }, {
            id: "sd2",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as"
        }, {
            id: "sd3",
            firstName: "asd",
            lastName: "dfsg",
            userName: "as",
            feedback: "hello"
        }];

        return data;

    };
    this.loginAdmin = function(username, pwd) {
        console.log("::" + username + pwd);
        return $http.post('http://nmtsa.herokuapp.com/admin', {
            "username": username,
            "password": pwd
        }, {});

    };

    this.login = function(username, pwd) {
        return $http.post('http://nmtsa.herokuapp.com/login', {
            //return $http.post('http://ec2-13-59-238-248.us-east-2.compute.amazonaws.com:8082/login', {
            "username": username,
            "password": pwd
        }, {});
    };

    this.submiAvailability = function(timings) {
        return $http.post('http://nmtsa.herokuapp.com/schedule_appointment', {
            "req_text": timings
        }, {});
    };

    this.register = function(username, pwd, fName, lName, date, temp, phone, pFirstName, pLastName, email, address, reason, selectedValues) {
        return $http.post('http://nmtsa.herokuapp.com/registerUser', {
            "username": username,
            "password": pwd,
            "first_name": fName,
            "last_name": lName,
            "dob": date,
            "diagnosis": temp,
            "phone_number": phone,
            "parent_first_name": pFirstName,
            "parent_last_name": pLastName,
            "email": email,
            "address": address,
            "refferal_reason": reason,
            "funding": selectedValues
        }, {});
    };

    // this.sendRequest=function()
    // {    

    // }


});