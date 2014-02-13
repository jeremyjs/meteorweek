if(Meteor.isClient) {
  Template.firstTemplate.helpers({
    people : function() {
      return ["Donald Knuth", "Donald Trump", "Donald Duck"];
    }
  });
}