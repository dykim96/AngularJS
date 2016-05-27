(function() {
  var app = angular.module('myApp', []);

  //app.controller('MainController', function($scope, $http) {
    //called promise because http requestion does not immediately return anything
    //but 'promises' that it WILL return something, whether it is data that user wants or an error message
    //var promise = $http.get("/users/1783");

    //when http returns data, then update the user
    /*promise.then(function(response){
      $scope.user = response.data;
    });*/

    //runs when http response was received
  /*  var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    //runs when http.get threw an error
    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    }

    $http.get("http://api.github.com/users/ronny-macmaster").then(onUserComplete, onError);

    $scope.message = "Hello, Angular!";
  });*/
  
  
  //shorten the variable name
  var MainController = function(s, h){
    var onUserComplete = function(response) {
      s.user = response.data;
    };

    //runs when http.get threw an error
    var onError = function(reason) {
      s.error = "Could not fetch the user";
    }

    h.get("http://api.github.com/users/ronny-macmaster").then(onUserComplete, onError);

    s.message = "Hello, Angular!";
  };
  
  //this line defines that s:$scope and h:$http in function called MainController
  app.controller('MainController', ["$scope", "$http", MainController]);
}());