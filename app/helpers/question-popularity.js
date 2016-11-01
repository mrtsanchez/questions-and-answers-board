import Ember from 'ember';

export function questionPopularity(params) {
  var thisQuestion = params[0];

  if(thisQuestion.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-arrow-up"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
