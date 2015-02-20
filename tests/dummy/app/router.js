import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('fullpage', {path: '/full'});
  this.route('demo-page', {path: '/full-demo'});
});

export default Router;
