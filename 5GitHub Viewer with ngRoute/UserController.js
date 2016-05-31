(function() {
  var app = angular.module('githubViewer');

  app.controller('UserController', function($scope, github, $routeParams) {
    
    var onUserComplete = function(data){
      $scope.user = data;
      $scope.error = "";
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    };
    
    var onError = function(reason){
      $scope.error = "Could not fetch the data";
    };
    
    $scope.username = $routeParams.username;//initialization
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError)
    
  });
}());