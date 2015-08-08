angular.module('app')
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: 'templates/index.html',
        controller: 'PostController'
      })
  })