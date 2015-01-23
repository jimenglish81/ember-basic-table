import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-table'],
  tagName: 'table',
  content: null,
  columns: null,
  actions: {
    sort: function(key) {
      if (this._sortKey === key) {
        this._sortMultiplier *= -1;
      } else {
        this._sortMultiplier = 1;
        this._sortKey = key;
      }
      var multiplier = this._sortMultiplier;

      this.get('content').sort(function(a, b) {
          return a.get(key) - b.get(key) * multiplier;
      });
      this.notifyPropertyChange('content');
      this.rerender();
    }
  }
});

