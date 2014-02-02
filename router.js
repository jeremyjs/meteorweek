Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'main'
  });
  this.route('topics-index', {
    path: '/topics',
    template: 'topics-index'
  });
  this.route('why-meteor', {
    path: '/topics/why-meteor',
    template: 'why-meteor'
  });
  this.route('getting-started', {
    path: '/topics/getting-started',
    template: 'getting-started'
  });
  this.route('first-template', {
    path: '/topics/first-template',
    template: 'first-template'
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
    template: 'blog-main'
  });
  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });
});