var app = angular.module('github-api').controller('GitHubController', function($scope, githubService) {

    $scope.getUserData = function() {
        githubService.getUser($scope.searchText)
            .then(function(result) {
                $scope.user = result.data;
            })
    }
});