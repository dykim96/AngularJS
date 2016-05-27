(function() {
  var app = angular.module('githubViewer', []);

  app.controller('MainController', function($scope, $http, $interval, $anchorScroll, $location) {
    
    var onUserComplete = function(response){
      $scope.user = response.data;
      $scope.error = "";
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };
    
    var onRepos = function(reponse){
      $scope.repos = reponse.data;
      $location.hash("userDetails");
      $anchorScroll();
    };
    
    var onError = function(reason){
      $scope.error = "Could not fetch the data";
    };
    
    $scope.search = function(username){
      $http.get("http://api.github.com/users/" + username).then(onUserComplete, onError);
    };
    
    //$http.get("http://api.github.com/users/angular").then(onUserComplete, onError);
    $scope.username = "angular";//initialization
    $scope.message = 'GitHub Viewer';
    $scope.repoSortOrder = "-stargazers_count";
  });
}());