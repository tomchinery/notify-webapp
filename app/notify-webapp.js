// define collections
Notifications = new Mongo.Collection('notifications')

if (Meteor.isClient) {

  angular.module('notifyapp', ['angular-meteor'])

  angular.module('notifyapp').controller('notificationsListController', ['$meteor', '$scope',
    function ($meteor, $scope) {
      $scope.notifications = $meteor.collection(Notifications)
    }
  ])

  angular.module('notifyapp').directive('addNotification',
    function () {
      return {
        restrict: 'E',
        templateUrl: 'views/add-notification.html',
        controller: 'addNotificationController',
      }
    }
  )

  angular.module('notifyapp').controller('addNotificationController', ['$meteor', '$scope',
    function ($meteor, $scope) {
      $scope.notifications = $meteor.collection(Notifications)
      $scope.add = false

      $scope.$on('addNotification', function () {
        $scope.add = true
      })

      $scope.addNotification = function (newNotification) {
        $scope.notifications.push({
          title: newNotification.title,
          body: newNotification.body,
          createdAt: new Date()
        })
        $scope.add = false
      }
    }
  ])

  angular.module('notifyapp').directive('deleteNotification',
    function () {
      return {
        restrict: 'E',
        templateUrl: 'views/delete-notification.html',
        controller: 'deleteNController'
      }
    }
  )

  angular.module('notifyapp').controller('deleteNController', ['$scope', '$meteor',
    function ($scope, $meteor) {
      $scope.notifications = $meteor.collection(Notifications)
      $scope.delete = false

      $scope.$on('deleteNotification', function (e, d) {
        $scope.n = d
        $scope.delete = true
      })

      $scope.removeN = function () {
        if ($scope.n) {
          $scope.notifications.remove($scope.n)
          $scope.delete = false
        }
      }
    }
  ])

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
