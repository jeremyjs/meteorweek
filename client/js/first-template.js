if(Meteor.isClient) {
  Template.firstTemplate.onamae = function() {
    return "Jonathan Ive";
  };
  Template.firstTemplate.names = function() {
    return ["Jonathan Ive", "Bill Gates", "Larry Page"];
  };
  Template.firstTemplate.isGates = function() {
    return this.name === "Bill Gates";
  };
  Template.firstTemplate.people = function() {
    return [
      {
        "name" : "Jonathan Ive",
        "color" : "red"
      },
      {
        "name" : "Bill Gates",
        "color" : "blue"
      },
      {
        "name" : "Larry Page",
        "color" : "green"
      }
    ];
  };
  Template.firstTemplate.events({
    'click input' : function(){
      alert("You clicked the button!");
    }
  });
}
