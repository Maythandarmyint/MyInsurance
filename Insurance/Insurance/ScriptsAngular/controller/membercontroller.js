
var myApp = angular.module('insApp', ['PremiumService']);

myApp.controller('MemberController', function ($scope, PremiumDataOp) {
    $scope.Person = null;
    getOccupationList();
    $scope.showValidationMsg = false;

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
        $scope.showValidationMsg = true;
        $scope.Premium = "";
        if ($scope.isFormValid) {
            if (!$.isNumeric($scope.Age) || !$.isNumeric($scope.DeathCoverAmount)) {
                $scope.Premium = "";
            } else {
                var para = {
                    occupation: $scope.Occupation,
                    age: $scope.Age,
                    deathcoveramount: $scope.DeathCoverAmount
                }

                PremiumDataOp.getPremiumAmount(para).then(function (data) {
                    successHandler(data);
                });
                var successHandler = function (retdata) {
                    $scope.Premium = retdata.data;
                }
            }
        }
    }

    $scope.$watch('CreateForm.$valid', function (newValue) { 
        $scope.isFormValid = newValue;
    });

});