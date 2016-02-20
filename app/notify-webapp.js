// define collections
Notifications = new Mongo.Collection('notifications')

if (Meteor.isClient) {

  angular.module('notifyapp', ['angular-meteor'])

  angular.module('notifyapp').controller('notificationsListController', ['$meteor',
    function ($meteor) {
      this.notifications = $meteor.collection(Notifications)
    }
  ])

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
