Router.configure({
  // layoutTemplate: 'layout',
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
    layoutTemplate: 'lessonLayout'
  });
  this.route('whyMeteor', {
    path: '/topics/why-meteor',
    template: 'whyMeteor',
    layoutTemplate: 'lessonLayout',
    data: function () {
      return {heading: "Why <strong>Meteor</strong>?"};
    }
  });
  this.route('gettingStarted', {
    path: '/topics/getting-started',
    template: 'gettingStarted',
    layoutTemplate: 'lessonLayout'
  });
  this.route('firstTemplate', {
    path: '/topics/first-template',
    template: 'firstTemplate',
    layoutTemplate: 'lessonLayout'
  });
  this.route('introCollections', {
    path: '/topics/intro-collections',
    template: 'introCollections'
  });
  this.route('routingBasics', {
    path: '/topics/routing-basics',
    template: 'routingBasics'
  });
  this.route('topicsIndex', {
    path: '/topics',
    template: 'topicsIndex'
  });
  this.route('lesson', {
    path: '/topics/:title',
    data: function() {
      return Lessons.findOne({title: this.params.title});
    },
    template: this.params.title,
    layoutTemplate: 'lessonLayout'
  });
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