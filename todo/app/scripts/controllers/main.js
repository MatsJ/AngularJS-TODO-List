'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */

angular.module('todoApp')
.controller('MainCtrl', function ($scope, localStorageService) {

  //stores added todos
  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore || [];

  //watch for changes in $scope.todos
  $scope.$watch('todos', function () {
    localStorageService.set('todos', $scope.todos);
  }, true);

  //add task
  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  //remove task
  $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
        swal('Done!', 'You have finished a task!', 'success');
  };
});
