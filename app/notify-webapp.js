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
        console.log('YEN1')
        $scope.add = true
      })

      $scope.addNotification = function (newNotification) {
        $scope.notifications.push({
          title: newNotification.title,
          body: newNotification.body,
          createdAt: new Date()
        })
        console.log($scope.notifications)
      }
    }
  ])

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
