import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    askQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
