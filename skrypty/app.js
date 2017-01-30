var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope','$http',function($scope,$http) {
  $scope.wynik = {};
  $scope.wynik.rata = '2';
  $scope.wynik.szkoda = '';
  $scope.zaznaczone = '';
  $scope.unselect = function() {

    if ($scope.wynik.szkoda === $scope.zaznaczone && $scope.wynik.szkoda !== '') {

      $scope.checked = false;
      $scope.wynik.szkoda = '';

    };
    $scope.zaznaczone = $scope.wynik.szkoda;

  };

  $scope.submit = function() {
    $scope.waluta = "zł"
    $http.post('/', $scope.wynik).then(function(res){
      $scope.skladka = res.data.skl;
    });
  };
}]);
