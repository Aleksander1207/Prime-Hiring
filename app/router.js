import EmberRouter from '@ember/routing/router';
import config from 'prime-hiring/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sign-up');
  this.route('login');
  this.route('home', function(){
    this.route('index', { path: '/' });
    this.route('developers', function(){
      this.route('index', {path: '/'});
      this.route('developer', {path : '/:developer_id'});
      this.route('create');
      this.route('hire');
    });
  });
  
});
