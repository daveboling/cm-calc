(function(){
  'use strict';
  angular.module('calc', [])
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'Calc++';
    $scope.display = '0';
    $scope.memory = '0';
    $scope.operator = '';

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.addToDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1) { return;}

      if($scope.display === '0' && num !== '.') {
        $scope.display = num;
      }
      else {
        $scope.display += num;
      }
    };

    $scope.calculate = function(op){
      $scope.operator += op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };


    $scope.answer = function(){
      var left  = parseFloat($scope.display),
          right = parseFloat($scope.memory);

      if($scope.operator === '+') {  $scope.display = (left + right); }
      else if($scope.operator === '-') {  $scope.display = (left - right); }
      else if($scope.operator === '/') {  $scope.display = (right / left); }
      else {  $scope.display = (right * left); }

      $scope.memory   = '0';
      $scope.operator = '';
    };


  }]);
})();
