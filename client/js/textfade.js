$(document).foundation();
$(document).ready(function() {
  console.log("Hello");
  setTimeout(function() {
    $(".active-text").toggleClass("inactive").toggleClass("active");
  }, 1300);
});