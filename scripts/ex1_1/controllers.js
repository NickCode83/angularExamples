//从angular的某一个版本开始,原来的简单写法就不行了,因为开发者认为那种写法不够模块化,会"带坏"开发者
var ex1Ctrl = angular.module('myApp', []);

ex1Ctrl.controller('HelloController', function($scope) {
    $scope.greeting = {text: 'Hello'};
});