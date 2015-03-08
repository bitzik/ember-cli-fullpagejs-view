import Ember from 'ember';

export function initialize() {
  Ember.$(document).ready(function () {
    //Ember.Logger.debug('no fullpage by default!');
    Ember.$('body').fullpage();
    //it is silly but the easiest way to remove the fullpage.js default initialization is by loading it first...
    Ember.$.fn.fullpage.destroy('all');
  });
  //Ember.$.fn.fullpage.destroy('all');
}

export default {
  name: 'ember-cli-fullpagejs-view/no-fullpage-by-default',
  initialize: Ember.K
};
