import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    upvote(answer){
      this.sendAction('upvote', answer);
      // console.log("actions up");
    },
    downvote(answer){
      this.sendAction('downvote', answer);
      // console.log("actions up");
    },


  }

});
