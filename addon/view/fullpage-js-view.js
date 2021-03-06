import Ember from 'ember';

export default Ember.View.extend({
  /**
   * run when the view is loaded to enable the fullpage.js abilities
   */
  initFullpage: function () {
    "use strict";
    var selector = this.get('fullpageSelector'), $element;
    Ember.Logger.debug('fullpage view -> initFullpage!');
    if (Ember.isNone(selector)) {
      $element = this.$();
    } else {
      $element = this.$(selector);
    }
    $element.fullpage(this.get('fullpageOptions'));
    this.customInitilization();
  }.on('didInsertElement'),
  removeFullpage: function () {
    "use strict";
    Ember.Logger.debug('fullpage view -> removeFullpage!');

    /*
     * NOTE: the following section is to be checked when fullpage.js is updated!
     * Strongly related to how fullpage.js setup its listener
     */
    //remove the side navigation is any
    //Ember.$('#fp-nav').remove();
    ////remove the global fullpage.js scrolling controls
    //Ember.$.fn.fullpage.setAllowScrolling(false);
    //Ember.$.fn.fullpage.setKeyboardScrolling(false);
    ////remove the global listener from fullpage.js
    //Ember.$(window).off('hashchange');
    //Ember.$(document).off('click', '#fullPage-nav a');
    //Ember.$('.section').off('click', '.toSlide');
    //Ember.$(document).off('click', '.fullPage-slidesNav a');

    Ember.$.fn.fullpage.destroy('all');
    Ember.$.fn.fullpage.destroy();

    this.customRemoval();
  }.on('willDestroyElement'),
  /**
   * contains the options that should be passed on to fullpage.js when initializing it.
   */
  fullpageOptions: {},
  /**
   * contains the selector that should host the fullpage initialization.
   */
  fullpageSelector: null,
  /**
   * function to override in case extra customization is required when loading initializing the view
   */
  customInitilization: function () {},
  /**
   * function to override in case extra customization is required when removing the view
   */
  customRemoval: function () {}
});
