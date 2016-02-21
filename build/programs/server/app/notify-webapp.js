(function(){// define collections
Notifications = new Mongo.Collection('notifications');

if (Meteor.isClient) {

  angular.module('notifyapp', ['angular-meteor']);

  angular.module('notifyapp').controller('notificationsListController', ['$meteor', '$scope', function ($meteor, $scope) {
    $scope.notifications = $meteor.collection(Notifications);
  }]);

  angular.module('notifyapp').directive('addNotification', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/add-notification.html',
      controller: 'addNotificationController'
    };
  });

  angular.module('notifyapp').controller('addNotificationController', ['$meteor', '$scope', function ($meteor, $scope) {
    $scope.notifications = $meteor.collection(Notifications);
    $scope.add = false;

    $scope.$on('addNotification', function () {
      $scope.add = true;
    });

    $scope.addNotification = function (newNotification) {
      $scope.notifications.push({
        title: newNotification.title,
        body: newNotification.body,
        createdAt: new Date()
      });
      $scope.add = false;
    };
  }]);

  angular.module('notifyapp').directive('deleteNotification', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/delete-notification.html',
      controller: 'deleteNController'
    };
  });

  angular.module('notifyapp').controller('deleteNController', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.notifications = $meteor.collection(Notifications);
    $scope['delete'] = false;

    $scope.$on('deleteNotification', function (e, d) {
      $scope.n = d;
      $scope['delete'] = true;
    });

    $scope.removeN = function () {
      if ($scope.n) {
        $scope.notifications.remove($scope.n);
        $scope['delete'] = false;
      }
    };
  }]);

  angular.module('notifyapp').directive('fakeNotification', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/fake-notification.html',
      controller: 'fakeNotificationController'
    };
  });

  angular.module('notifyapp').controller('fakeNotificationController', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.$on('showNotification', function (e, n) {
      $scope.fn = n;
      $timeout(function () {
        $scope.fn = undefined;
      }, 5000);
    });
  }]);

  angular.module('notifyapp').directive('editNotification', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/edit-notification.html',
      controller: 'editNController'
    };
  });

  angular.module('notifyapp').controller('editNController', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.notifications = $meteor.collection(Notifications);
    $scope.edit = false;

    $scope.$on('editNotification', function (e, n) {
      $scope.old = angular.copy(n);
      $scope.en = n;
      $scope.edit = true;
    });
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
//# sourceMappingURL=data:application/json;base64,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YSxDQUFDLENBQUE7QUFDeEQsVUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7O0FBRW5CLFVBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzdDLFlBQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixZQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNiLFlBQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0tBQ25CLENBQUMsQ0FBQTtHQUNILENBQ0YsQ0FBQyxDQUFBO0NBRUg7O0FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ25CLFFBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWTs7R0FFMUIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiL25vdGlmeS13ZWJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZpbmUgY29sbGVjdGlvbnNcbk5vdGlmaWNhdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbm90aWZpY2F0aW9ucycpXG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblxuICBhbmd1bGFyLm1vZHVsZSgnbm90aWZ5YXBwJywgWydhbmd1bGFyLW1ldGVvciddKVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdub3RpZnlhcHAnKS5jb250cm9sbGVyKCdub3RpZmljYXRpb25zTGlzdENvbnRyb2xsZXInLCBbJyRtZXRlb3InLCAnJHNjb3BlJyxcbiAgICBmdW5jdGlvbiAoJG1ldGVvciwgJHNjb3BlKSB7XG4gICAgICAkc2NvcGUubm90aWZpY2F0aW9ucyA9ICRtZXRlb3IuY29sbGVjdGlvbihOb3RpZmljYXRpb25zKVxuICAgIH1cbiAgXSlcblxuICBhbmd1bGFyLm1vZHVsZSgnbm90aWZ5YXBwJykuZGlyZWN0aXZlKCdhZGROb3RpZmljYXRpb24nLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWRkLW5vdGlmaWNhdGlvbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2FkZE5vdGlmaWNhdGlvbkNvbnRyb2xsZXInLFxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdub3RpZnlhcHAnKS5jb250cm9sbGVyKCdhZGROb3RpZmljYXRpb25Db250cm9sbGVyJywgWyckbWV0ZW9yJywgJyRzY29wZScsXG4gICAgZnVuY3Rpb24gKCRtZXRlb3IsICRzY29wZSkge1xuICAgICAgJHNjb3BlLm5vdGlmaWNhdGlvbnMgPSAkbWV0ZW9yLmNvbGxlY3Rpb24oTm90aWZpY2F0aW9ucylcbiAgICAgICRzY29wZS5hZGQgPSBmYWxzZVxuXG4gICAgICAkc2NvcGUuJG9uKCdhZGROb3RpZmljYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5hZGQgPSB0cnVlXG4gICAgICB9KVxuXG4gICAgICAkc2NvcGUuYWRkTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKG5ld05vdGlmaWNhdGlvbikge1xuICAgICAgICAkc2NvcGUubm90aWZpY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0aXRsZTogbmV3Tm90aWZpY2F0aW9uLnRpdGxlLFxuICAgICAgICAgIGJvZHk6IG5ld05vdGlmaWNhdGlvbi5ib2R5LFxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuICAgICAgICB9KVxuICAgICAgICAkc2NvcGUuYWRkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIF0pXG5cbiAgYW5ndWxhci5tb2R1bGUoJ25vdGlmeWFwcCcpLmRpcmVjdGl2ZSgnZGVsZXRlTm90aWZpY2F0aW9uJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RlbGV0ZS1ub3RpZmljYXRpb24uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdkZWxldGVOQ29udHJvbGxlcidcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBhbmd1bGFyLm1vZHVsZSgnbm90aWZ5YXBwJykuY29udHJvbGxlcignZGVsZXRlTkNvbnRyb2xsZXInLCBbJyRzY29wZScsICckbWV0ZW9yJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCAkbWV0ZW9yKSB7XG4gICAgICAkc2NvcGUubm90aWZpY2F0aW9ucyA9ICRtZXRlb3IuY29sbGVjdGlvbihOb3RpZmljYXRpb25zKVxuICAgICAgJHNjb3BlLmRlbGV0ZSA9IGZhbHNlXG5cbiAgICAgICRzY29wZS4kb24oJ2RlbGV0ZU5vdGlmaWNhdGlvbicsIGZ1bmN0aW9uIChlLCBkKSB7XG4gICAgICAgICRzY29wZS5uID0gZFxuICAgICAgICAkc2NvcGUuZGVsZXRlID0gdHJ1ZVxuICAgICAgfSlcblxuICAgICAgJHNjb3BlLnJlbW92ZU4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkc2NvcGUubikge1xuICAgICAgICAgICRzY29wZS5ub3RpZmljYXRpb25zLnJlbW92ZSgkc2NvcGUubilcbiAgICAgICAgICAkc2NvcGUuZGVsZXRlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXSlcblxuICBhbmd1bGFyLm1vZHVsZSgnbm90aWZ5YXBwJykuZGlyZWN0aXZlKCdmYWtlTm90aWZpY2F0aW9uJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zha2Utbm90aWZpY2F0aW9uLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnZmFrZU5vdGlmaWNhdGlvbkNvbnRyb2xsZXInXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgYW5ndWxhci5tb2R1bGUoJ25vdGlmeWFwcCcpLmNvbnRyb2xsZXIoJ2Zha2VOb3RpZmljYXRpb25Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJHRpbWVvdXQnLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUsICR0aW1lb3V0KSB7XG5cbiAgICAgICRzY29wZS4kb24oJ3Nob3dOb3RpZmljYXRpb24nLCBmdW5jdGlvbiAoZSwgbikge1xuICAgICAgICAkc2NvcGUuZm4gPSBuXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkc2NvcGUuZm4gPSB1bmRlZmluZWRcbiAgICAgICAgfSwgNTAwMClcbiAgICAgIH0pXG5cbiAgICB9XG4gIF0pXG5cbiAgYW5ndWxhci5tb2R1bGUoJ25vdGlmeWFwcCcpLmRpcmVjdGl2ZSgnZWRpdE5vdGlmaWNhdGlvbicsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZGl0LW5vdGlmaWNhdGlvbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2VkaXROQ29udHJvbGxlcidcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBhbmd1bGFyLm1vZHVsZSgnbm90aWZ5YXBwJykuY29udHJvbGxlcignZWRpdE5Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJG1ldGVvcicsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgJG1ldGVvcikge1xuICAgICAgJHNjb3BlLm5vdGlmaWNhdGlvbnMgPSAkbWV0ZW9yLmNvbGxlY3Rpb24oTm90aWZpY2F0aW9ucylcbiAgICAgICRzY29wZS5lZGl0ID0gZmFsc2VcblxuICAgICAgJHNjb3BlLiRvbignZWRpdE5vdGlmaWNhdGlvbicsIGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICAgICRzY29wZS5vbGQgPSBhbmd1bGFyLmNvcHkobilcbiAgICAgICAgJHNjb3BlLmVuID0gblxuICAgICAgICAkc2NvcGUuZWRpdCA9IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICBdKVxuXG59XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG4gIH0pO1xufVxuIl19
}).call(this);

//# sourceMappingURL=notify-webapp.js.map
