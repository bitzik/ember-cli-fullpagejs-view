# Ember-cli-fullpagejs-view

I integrated the nice looking [fullPage.js](http://alvarotrigo.com/fullPage/) library into the [Bitzik](http://bitzik.com) front end and thought there might be someone else out there who might benefice from it.

PR are welcome, issues reporting too (even better if you report the solution as well!)

This is my first Ember-addon, do not hesitate to come up with suggestions/correction to make it more conventional.

Happy Ember coding!


## Usage

At its simplest, You just have to use the `FullpageJsView` as base for your Ember view:

    import Ember from 'ember';
    import FullpageJsView from 'ember-cli-fullpagejs-view/view/fullpage-js-view';


    export default FullpageJsView.extend({

    });

Optionally, you can setup some customization:

    import Ember from 'ember';

    import FullpageJsView from 'ember-cli-fullpagejs-view/view/fullpage-js-view';

    export default FullpageJsView.extend({
      fullpageOptions: {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    		menu: '#menu',
    		scrollingSpeed: 1000
      },

      fullpageSelector: ".fullpage-class",

      customInitilization: function () {},

      customRemoval: function () {}
    });

Options are:

  - `fullpageOptions`:  object to be pass on to the fullpage constructor
  - `fullpageSelector`: jQuery selector string that will be used to find the fullpage base element. Null or empty selector will default to `this.$()`
  - `customInitialization`: function that will be called when initizalising fullpage (i.e. `on('didInsertElement')`)
  - `customRemoval`: function that will be called once the addon has tried to clean up any trace of fullpage presence. If you find something that was forgotten put it here (or fill in an issue / send me a PR !)
