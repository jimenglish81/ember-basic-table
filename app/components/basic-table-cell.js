import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  content: null,
  column: null,
  addClassName: function() {
    var className = this.get('column.className');
    if (className) {
      this.$().addClass(className);
    }
  }.on('didInsertElement'),
  cellTemplate: function() {
    var column = this.get('column');
    return Ember.get(column, 'cellTemplate');
  }.property('column.cellTemplate'),
  cellContent: function(key) {
    var column = this.get('column'),
      columnKey = Ember.get(column, 'key'),
      content = this.get('content'),
      value = Ember.get(content, columnKey);

    if (!this._hasObserver) {
      content.addObserver(columnKey, function() {
        this.notifyPropertyChange(key);
      }.bind(this));
      this._hasObserver = true;
    }
    return value;
  }.property('content'),
  click: function(evt) {
    var column = this.get('column'),
      content = this.get('content'),
      clickHandler = column.get('clickHandler');
    if (clickHandler) {
      clickHandler(evt, content);
    }
    this.sendAction();
  }
});
