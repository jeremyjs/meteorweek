if(Meteor.isClient) {
  Template.firstTemplate.names = function() {
    return ["Donald Knuth", "Donald Trump", "Donald Duck"];
  }
  Template.firstTemplate.namesAndColors = function() {
    return [
      {
        "name": "Donald Knuth",
        "color": "Blue"
      },
      {
        "name": "Donald Trump",
        "color": "Green"
      },
      {
        "name": "Donald Duck",
        "color": "Red"
      }
    ];
  }
}