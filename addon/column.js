import Ember from 'ember';

export default Ember.Object.extend({
  label: null,
  key: null,
  cellTemplate: 'basic-table-default-cell',
  clickHandler: Ember.K
});