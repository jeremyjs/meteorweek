// trim helper
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}
var isValidPassword = function(val) {
  return val.length >= 8 ? true : false;
}
// from https://gist.github.com/tmazur/3965625
function isValidEmail(emailAddress) {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
};

if(Meteor.isClient) {
  Template.nav.events({
    'submit #login' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = $('#email').val();
      var password = $('#password').val();

      // Trim and validate your fields here
      email = trimInput(email);

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err){
        if(err) {
          $('.alert').html('Invalid login.');
          console.log("login error: " + err)
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed.
        }
        else {
          $('#login').hide();
          console.log('login success!');
          // The user has been logged in.
        }
      });
      return false;
    }
  })
  Template.lander.events({
    'submit #signup' : function(e, t) {

      e.preventDefault();

      // if we haven't gotten the email yet
      // if($("#email-row").is(":visible")) {
      //   var email = t.find('#email').value;

      //   // Trim and validate the input
      //   email = trimInput(email);
      //   if(isValidEmail(email)) {
      //     $("#email-row").toggle();
      //     $("#password-row").toggle();
      //   }
      //   else {
      //     // Inform the user that account creation failed
      //     $('.signup-alert').html('Invalid email.');
      //   }
      //   return false;
      // }
      // otherwise get the email and password
      var email = $('#signup-email').val();
      var password = $('#signup-password').val();
      // console.log(email);

      // Trim and validate the input
      email = trimInput(email);

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      if(!isValidEmail(email)) {
        $('.signup-alert').html('Invalid email.');
        return false;
      }
      if(isValidPassword(password)) {
        Accounts.createUser({email: email, password: password}, function(err){
          if(err) {
            // Inform the user that account creation failed
            $('.signup-alert').html('Invalid signup info.');
            console.log("sinup error: " + err);
          }
          else {
            // Success. Account has been created and the user
            // has logged in successfully.
            // go to first tutorial
            console.log('user created: ' + email);
            return true;
          }
        });
      }
      else {
        $('.signup-alert').html('Invalid password. Must be >= 8 characters.');
      }
      return false;
    }
  });
}