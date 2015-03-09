import Ember from 'ember';

export function initialize() {
  //Ember.$(document).ready(function () {
    //Ember.Logger.debug('no fullpage by default!');
    var fakeDiv = Ember.$('<div>');
    fakeDiv.fullpage();
    //it is silly but the easiest way to remove the fullpage.js default initialization is by loading it first...
    Ember.$.fn.fullpage.destroy('all');
    fakeDiv.remove();
  //});
  //Ember.$.fn.fullpage.destroy('all');
}

export default {
  name: 'ember-cli-fullpagejs-view/remove-fullpage',
  initialize: Ember.K
};
