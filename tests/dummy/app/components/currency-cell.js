import DefaultCell from './basic-table-default-cell';

export default DefaultCell.extend({
  currencySymbol: '£',
  formattedValue: function() {
    return '%@ %@.00'.fmt(this.get('currencySymbol'), this.get('value'));
  }.property('value').readOnly()
});