
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
        $scope.occupationList = PremiumDataOp.getOccupationList().then(function (data) {
            $scope.occupationList = genericSuccess(data);
        });
        var genericSuccess = function (res) {
            return res.data;
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
                $scope.Premium = data.data;
            });
        }
    }

});