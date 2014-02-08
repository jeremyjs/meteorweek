

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'main',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('topics-index', {
    path: '/topics',
    template: 'topics-index',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('why-meteor', {
    path: '/topics/why-meteor',
    template: 'why-meteor',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('getting-started', {
    path: '/topics/getting-started',
    template: 'getting-started',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('first-template', {
    path: '/topics/first-template',
    template: 'first-template',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('videos', {
    path: '/videos',
    template: 'videos',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('challenges', {
    path: '/challenges',
    template: 'challenges',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('signup', {
    path: '/signup',
    template: 'signup',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('about', {
    path: '/about',
    template: 'about',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('jobs', {
    path: '/jobs',
    template: 'jobs',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('blog', {
    path: '/blog',
    template: 'blog-main',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('contact', {
    path: '/contact',
    template: 'contact',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
});