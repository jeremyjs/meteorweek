if(Meteor.isClient) {
  Template.layout.user = function() {
    if(Meteor.user()) {
      return false;
    }
  }
}