import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  question_id: DS.attr()
});
