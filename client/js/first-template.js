if(Meteor.isClient) {
  Template.firstTemplate.onamae = function() {
    return "Donald Knuth";
  }
  Template.firstTemplate.names = function() {
    return ["Donald Knuth", "Donald Trump", "Donald Duck"];
  }
  // Template.firstTemplate.namesAndColors = function() {
  //   return [
  //     {
  //       "name": "Donald Knuth",
  //       "color": "Blue"
  //     },
  //     {
  //       "name": "Donald Trump",
  //       "color": "Green"
  //     },
  //     {
  //       "name": "Donald Duck",
  //       "color": "Red"
  //     }
  //   ];
  // }
  Template.firstTemplate.isTrump = function() {
    return this.name === "Donald Trump";
  }
  Template.firstTemplate.people = function() {
    return [{
      "name" : "Donald Knuth",
      "color" : "Blue"
    },
    {
      "name" : "Donald Trump",
      "color" : "Green"
    },
    {
      "name" : "Donald Duck",
      "color" : "Red"
    }];
  }
  Template.firstTemplate.events({
    'click input' : function(){
      alert("You clicked the button!");
    }
  });
}
