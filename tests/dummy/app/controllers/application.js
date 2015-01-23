import Ember from 'ember';
import Column from 'ember-basic-table/column';

export default Ember.Controller.extend({
  model: Ember.A([
    Ember.Object.create({foo: 1, bar: 200}), 
    Ember.Object.create({foo: 51, bar: 62}),
    Ember.Object.create({foo: 5, bar: 65})
  ]),
  columns: Ember.A([
    Column.create({
      label: 'Foo',
      key: 'foo',
      className: 'foo-qux',
      cellTemplate: 'currency-cell'
    }),
    Column.create({
      label: 'Bar',
      key: 'bar',
      clickHandler: function(evt, content) {
        console.log(evt, content);
      }
    })
  ])
});