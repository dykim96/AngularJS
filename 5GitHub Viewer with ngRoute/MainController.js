(function() {
  var app = angular.module('githubViewer');

  app.controller('MainController', function($scope, $log, /*$interval,*/ $location) {
    
    /*var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }*/
    
    $scope.search = function(username){
      $log.info("Searching for " + username);
      $location.path("/user/" + username);
    };
    
    $scope.username = "angular";//initialization
    //$scope.countdown = 5;
    //startCountdown();
  });
}());