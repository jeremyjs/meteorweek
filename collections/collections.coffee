lessons = [
  ["", ""]
  ["gettingStarted", "Getting Started"]
  ["firstTemplate", "Your First Template"]
  ["introCollections", "Intro to Collections"]
  ["routingBasics", "Routing Basics"]
  ["publishSubscribe", "Publish & Subscribe"]
  ["introAccounts", "User Accounts"]
  ["introHosting", "Best Practices & Hosting"]
  ["", ""]
]

@Lessons = new Meteor.Collection("lessons")

for i in [1...lessons.length-1] by 1
  Lessons.insert({
    title: lessons[i][1]
    route: lessons[i][0]
  })

@Messages = new Meteor.Collection("messages")

if(Meteor.isServer)
  Meteor.publish("messages", ->
    Messages.find()
  )