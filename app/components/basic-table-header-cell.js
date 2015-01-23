import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  column: null,
  actions: {
    sort: function(key) {
      this.sendAction('sort', key);
    }
  }
});
