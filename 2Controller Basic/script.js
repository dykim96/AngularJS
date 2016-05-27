
//Angular 1.3.0 beta
/*var MainController = function($scope) {
  
  $scope.message = "Hello, Angular";
  
};*/

//Angular above 1.3.0
/*var mainApp = angular.module("myApp", []);
mainApp.controller('MainController', function($scope){
  $scope.message = "Hello, Angular!";
});*/


//can also do
//angular.module("title of app", []).controller(...);
//but throws bad request
var mainApp = angular.module("myApp", []);
mainApp.controller('MainController', function($scope){
  var person = {
    firstName: "Scott",
    lastName: "Allen",
    imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg"
  };
  
  $scope.message = "Hello, Angular!";
  $scope.person = person;
  
});
