if(Meteor.isClient) {
  Template.firstTemplate.onamae = function() {
    return "Jonathan Ive";
  };
  Template.firstTemplate.names = function() {
    return ["Jonathan Ive", "Bill Gates", "Larry Page"];
  };
  Template.firstTemplate.isBill = function() {
    return this.name === "Bill Gates";
  };
  Template.firstTemplate.people = function() {
    return [
      {
        "name" : "Jonathan Ive",
        "color" : "Red"
      },
      {
        "name" : "Bill Gates",
        "color" : "Blue"
      },
      {
        "name" : "Larry Page",
        "color" : "Green"
      }
    ];
  };
  Template.firstTemplate.events({
    'click input' : function(){
      alert("You clicked the button!");
    }
  });
}
