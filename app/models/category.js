import DS from 'ember-data';

export default DS.Model.extend({
  Banking: DS.attr(),
  Rental: DS.attr(),
  Education: DS.attr(),
  Living: DS.attr(),
});
