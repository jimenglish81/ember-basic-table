import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'thead',
  columns: null,
  actions: {
    sort: function(key) {
      this.sendAction('sort', key);
    }
  }
});
