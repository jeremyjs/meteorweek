@Messages = new Meteor.Collection("messages")

if(Meteor.isServer)
  Meteor.publish("messages", ->
    Messages.find()
  )