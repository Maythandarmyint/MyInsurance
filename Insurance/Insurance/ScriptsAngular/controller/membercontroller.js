
var myApp = angular.module('insApp', ['PremiumService']);

myApp.controller('MemberController', function ($scope, PremiumDataOp) {
    $scope.Person = null;
    getOccupationList();

    $scope.occupationChanged = function () {
        calculatePremiumAmount();
    };

    $scope.calculatePremiumClick = function () {
        calculatePremiumAmount();
    };

    function getOccupationList() {
        PremiumDataOp.getOccupationList().then(function (data) {
            successHandler(data);
        });
        var successHandler = function (retdata) {
            $scope.occupationList = retdata.data;
        }
    }

    function calculatePremiumAmount() {
        if (!$.isNumeric($scope.Age) || !$.isNumeric($scope.Death)) {
            $scope.Premium = "";
        } else {
            var para = {
                occupation: $scope.Occupation,
                age: $scope.Age,
                deathcoveramount: $scope.Death
            }

            PremiumDataOp.getPremiumAmount(para).then(function (data) {
                successHandler(data);
            });
            var successHandler = function (retdata) {
                $scope.Premium = retdata.data;
            }
        }
    }

});