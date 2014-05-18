if(Meteor.isClient) {
  Template.firstTemplate.onamae = function() {
    return "Jonathan Ive";
  }
  Template.firstTemplate.names = function() {
    return ["Jonathan Ive", "Bill Gates", "Larry Page"];
  }
  Template.firstTemplate.isTrump = function() {
    return this.name === "Bill Gates";
  }
  Template.firstTemplate.people = function() {
    return [{
      "name" : "Jonathan Ive",
      "color" : "Blue"
    },
    {
      "name" : "Bill Gates",
      "color" : "Green"
    },
    {
      "name" : "Larry Page",
      "color" : "Red"
    }];
  }
  Template.firstTemplate.events({
    'click input' : function(){
      alert("You clicked the button!");
    }
  });
}
