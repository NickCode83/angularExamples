/**
 * Created by nickchu on 16/4/23.
 */
var ex2_1Ctrl = angular.module('myApp',[]);

ex2_1Ctrl.controller('CartController', function($scope){
    $scope.bill = {};

    $scope.items = [
        {title:'Paint pots', quantity:8, price: 3.95},
        {title:'Polka dots', quantity:16, price: 5.95},
        {title:'Pebbles', quantity:23, price: 9.95}
    ];

    $scope.remove = function($index){
        $scope.items.splice($index,1);
    };

    $scope.totalCart = function(){
        var total = 0;

        for(var i = 0, len = $scope.items.length; i < len; i++){
            total = total + $scope.items[i].quantity * $scope.items[i].price
        }

        return total;
    };

    $scope.subTotal = function () {
        return $scope.totalCart() - $scope.bill.discount;
    }

    function calculateDiscount(newValue, oldValue, scope){
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
});