angular.module('app')
  .controller('PostController', function($scope, $http){
    $scope.destroyPost = function(post){
      debugger;
      console.log(post);
      $http.delete('https://blog-post-heroku.herokuapp.com/api/posts/' + post.id)
        .then(function(post){
          console.log(post);
        }, function(err){
          console.error(err);
        })
    };
    $http.get('https://blog-post-heroku.herokuapp.com/api/posts')
      .then(function(data){
        console.log(data);
        $scope.posts = data.data.posts;
      },
      function(err){
        $scope.error = err;
      });
  });