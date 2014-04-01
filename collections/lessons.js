Lessons = new Meteor.Collection("lessons");

titles = [
	"whyMeteor",
	"gettingStarted",
	"myFirstTemplate",
	"routingBasics"
];

insertTitles(titles);

function insertTitles (titles) {
  if(titles.length == 0) {
    return;
  }
  else if(titles.length == 1) {
    Lessons.insert({
      title: titles[0],
      prev: "",
      next: ""
    });
  }
  else if(titles.length == 2) {
    Lessons.insert({
      title: titles[0],
      prev: "",
      next: ""
    });
  }
  Lessons.insert({
    title: titles[0],
    prev: "",
    next: titles[1]
  });
  for (var i = 1; i < titles.length-1; i++) {
    Lessons.insert({
      title: titles[i],
      prev: titles[i-1],
      next: titles[i+1]
    });
  }
  Lessons.insert({
  	title: titles[titles.length-1],
    prev: titles[titles.length-2],
    next: ""
  });
}