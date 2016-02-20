if (Meteor.isClient) {

  angular.module('notifyapp', ['angular-meteor'])

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
