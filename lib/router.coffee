
Router.configure(
  layoutTemplate: 'layout'
  onAfterAction: ->
    # TODO: better way to do this?
    $('.content-inner').scrollTop(0)
    $(window).scrollTop(0)
)

# Router.onBeforeAction('loading')

Router.map( ->
  this.route('home'
    path: '/'
    template: 'lander'
    layoutTemplate: ''
  )
  this.route(
    'topicsIndex'
    {
      path: '/topics'
      template: 'topicsIndex'
      data: ->
        l = []
        for i in [1...lessons.length-1] by 1
          l.push(
            name: lessons[i][0]
            title: lessons[i][1]
          )
        lessons: l
    }
  )
  # TODO: best way to dynamically create routes
  # create lesson routes
  for i in [1...lessons.length-1] by 1
    route = lessons[i][0]
    title = lessons[i][1]
    pRoute = lessons[i-1][0]
    pTitle = lessons[i-1][1]
    nRoute = lessons[i+1][0]
    nTitle = lessons[i+1][1]
    this.route(
      route
      {
        path: '/topics/' + route
        template: route
        layoutTemplate: 'lessonLayout'
        data:
          prev: pRoute,
          prevTitle: pTitle,
          next: nRoute,
          nextTitle: nTitle
      }
    )
  this.route('videos'
    path: '/videos'
    template: 'videos'
  )
  this.route('challenges'
    path: '/challenges'
    template: 'challenges'
  )
  # this.route('references'
  #   path: '/references'
  #   template: 'references'
  # )
  this.route('eventsReference'
    path: '/references/events'
    template: 'eventsReference'
  )
  this.route('collectionsReference'
    path: '/references/collections'
    template: 'collectionsReference'
  )
  this.route('signup'
    path: '/signup'
    template: 'signup'
  )
  this.route('about'
    path: '/about'
    template: 'about'
  )
  this.route('jobs'
    path: '/jobs'
    template: 'jobs'
  )
  this.route('blog'
    path: '/blog'
    template: 'blog'
  )
  this.route('blog'
    path: '/blog/:post'
    template: 'blog'
  )
  this.route('contact'
    path: '/contact'
    template: 'contact'
  )
)