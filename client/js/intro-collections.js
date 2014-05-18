if(Meteor.isClient) {
  Template.introCollections.findMessages = function() {
    return Messages.find({ user: "jonyive", recipient: "tcook" });
  }
}