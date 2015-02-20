import Ember from 'ember';

import FullpageJsView from 'ember-cli-fullpagejs-view/view/fullpage-js-view';

export default FullpageJsView.extend({
  fullpageOptions: {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		scrollingSpeed: 1000
  }

});
