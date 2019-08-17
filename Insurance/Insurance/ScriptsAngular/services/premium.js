var PremiumService = angular.module('PremiumService', [])

PremiumService.factory('PremiumDataOp', ['$http', function ($http) {

    var PremiumDataOp = {};

    PremiumDataOp.getOccupationList = function () {
        return $http.get('/Home/GetOccupationList');
    };

    PremiumDataOp.getPremiumAmount = function (parameters) {
        return $http({
            method: 'GET',
            url: '/Home/CalculatePremium',
            params: parameters
        });
    };

    return PremiumDataOp;

}]);