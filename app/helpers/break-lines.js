import Ember from 'ember';

export default Ember.Helper.helper(function(param) {
  return Ember.String.htmlSafe(`<p>${param}</p>`);
});
