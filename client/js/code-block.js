if(Meteor.isClient) {
	Template.codeBlock.content = function(test) {
		Spacebars.SafeString(test);
	}
}