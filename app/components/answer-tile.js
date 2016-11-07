import Ember from 'ember';

export default Ember.Component.extend({
  sortAnswers: Ember.computed('answer.author', 'answer.votes', function() {
    return this.get('answer.author') + ' - ' + this.get('answer.votes');
  }),
  actions: {
    upvote(answer){
      this.sendAction('upvote', answer);
      // console.log("upvoting");
    },
    downvote(answer){
      this.sendAction('downvote', answer);
    }
  }
});
