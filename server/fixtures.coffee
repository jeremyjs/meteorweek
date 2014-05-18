Meteor.startup( ->
  Messages.upsert({
    user: "jonyive"
    text: "I have some ideas I want you to see"
    recipient: "IDg"
  }
  {
    user: "jonyive"
    text: "I have some ideas I want you to see"
    recipient: "IDg"
    createdAt: new Date().getTime()
  })
  Messages.upsert({
    user: "jonyive"
    text: "Coffee?"
    recipient: "tcook"
  }
  {
    user: "jonyive"
    text: "Coffee?"
    recipient: "tcook"
    createdAt: new Date().getTime()
  })
  Messages.upsert({
    user: "tcook"
    text: "3:30?"
    recipient: "jonyive"
  }
  {
    user: "tcook"
    text: "3:30?"
    recipient: "jonyive"
    createdAt: new Date().getTime()
  })
  Messages.upsert({
    user: "jonyive"
    text: "Sounds good"
    recipient: "tcook"
  }
  {
    user: "jonyive"
    text: "Sounds good"
    recipient: "tcook"
    createdAt: new Date().getTime()
  })
)