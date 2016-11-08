import Ember from 'ember';

export function answersNumber(params) {
  var question = params[0];
  var answersTotal = question.get('answers').get('length');
  if(answersTotal >= 2) {
    return answersTotal + Ember.String.htmlSafe(' answers');
  } else if (answersTotal = 0) {
    return Ember.String.htmlSafe('no answers');
  } else {
    return Ember.String.htmlSafe('1 answer');
  }
}

export default Ember.Helper.helper(answersNumber);
