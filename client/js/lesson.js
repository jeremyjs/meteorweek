if(Meteor.isClient) {
	Template.lessonLayout.codeBlock = function (title, content) {
		return codeBlock;
	}
}