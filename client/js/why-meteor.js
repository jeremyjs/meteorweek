if (Meteor.isClient) {
  Template.whyMeteor.version = function() {
    function kimonoCallback(data) {
      var version = data['results']['collection1']['property1'];
      var number = version.slice(9);
      return version;
    }

    $.ajax({
      "url":"http://www.kimonolabs.com/api/74fps0t2?apikey=3ee554fe4d6b88e0f1f39a3a43c42afd&callback=kimonoCallback",
      "crossDomain":true,
      "dataType":"jsonp"
    });
  };
}