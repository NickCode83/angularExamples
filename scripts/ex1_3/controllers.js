var ex1_3Ctrl = angular.module('myApp',[]);

ex1_3Ctrl.controller('CartController', function($scope){
    $scope.items = [
        {title:'Paint pots', quantity:8, price: 3.95},
        {title:'Polka dots', quantity:16, price: 5.95},
        {title:'Pebbles', quantity:23, price: 9.95}
    ];

    $scope.remove = function($index){
        $scope.items.splice($index,1);
    }
});