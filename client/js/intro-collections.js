if(Meteor.isClient) {
  Template.introCollections.findMessages = function() {
    return Messages.find({ user: "jonyive", recipient: "tcook" });
  }
  Template.introCollections.findMessages2 = function() {
    return Messages.find(
    	{ user: "jonyive", recipient: "tcook" },
    	{ sort: {createdAt: -1}, limit: 1 }
    );
  }
}