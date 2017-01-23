var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope','$http',function($scope,$http) {


  $scope.submit = function() {

    $http.post('/', $scope.wynik).then(function(res){

      $scope.skladka = res.data.skl;
    });
  };
}]);
