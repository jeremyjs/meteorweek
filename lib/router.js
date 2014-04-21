Router.configure({
  layoutTemplate: 'layout',
  onAfterAction: function() {
    $('.content-inner').scrollTop(0);
    $(window).scrollTop(0);
  }
});

// Router.onBeforeAction('loading');

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'lander',
    layoutTemplate: ''
  });
  this.route('topicsIndex', {
    path: '/topics',
    template: 'topicsIndex',
    data: function() {
      var l = [];
      for(var i=1; i < lessons.length-1; i++) {
        l.push({ name: lessons[i][0], title: lessons[i][1] });
      }
      return {
        lessons: l
      }
    }
  });
  // create lesson routes
  for(var i=1; i < lessons.length-1; i++) {
    var route = lessons[i][0];
    var title = lessons[i][1];
    var pRoute = lessons[i-1][0];
    var pTitle = lessons[i-1][1];
    var nRoute = lessons[i+1][0];
    var nTitle = lessons[i+1][1];
    this.route(route, {
      path: '/topics/' + route,
      template: route,
      layoutTemplate: 'lessonLayout',
      data: {
        prev: pRoute,
        prevTitle: pTitle,
        next: nRoute,
        nextTitle: nTitle
      }
    });
  }
  this.route('videos', {
    path: '/videos',
    template: 'videos'
  });
  this.route('challenges', {
    path: '/challenges',
    template: 'challenges'
  });
  this.route('signup', {
    path: '/signup',
    template: 'signup'
  });
  this.route('about', {
    path: '/about',
    template: 'about'
  });
  this.route('jobs', {
    path: '/jobs',
    template: 'jobs'
  });
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
  this.route('blog', {
    path: '/blog/:post',
    template: 'blog'
  });
  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });
});