import DS from 'ember-data';

export default DS.Model.extend({
  questiontitle: DS.attr(),
  category: DS.attr(),
  author: DS.attr(),
  details: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
