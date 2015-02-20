module.exports = {
  description: 'ember-cli-fullpagejs-view',

  included: function(app) {
    this._super.included(app);

    app.import({
      development: 'bower_components/fullpage.js/jquery.fullPage.js',
      prod: 'bower_components/fullpage.js/jquery.fullPage.min.js',
    });

    app.import('bower_components/fullpage.js/jquery.fullPage.css');
  },

  // afterInstall: function() {
  //   return this.addBowerPackageToProject('fullpage.js');
  // }
};
