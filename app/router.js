import EmberRouter from '@ember/routing/router';
import config from 'gara6/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('home', function(){
    this.route('index', { path: '/' });
    this.route('user');
    this.route('vehicles', function(){
      this.route('index', { path: '/' });
      this.route('vehicle', {path : '/:vehicle_id'});
    });
  });
  
});
