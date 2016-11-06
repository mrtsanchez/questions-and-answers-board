import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('index');
    },
    upvote(answer){
      answer.incrementProperty('votes', 1);
      answer.save();
    },
    downvote(answer){
      answer.decrementProperty('votes', 1);
      answer.save();
    }
  }
});
