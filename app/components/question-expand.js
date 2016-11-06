import Ember from 'ember';

export default Ember.Component.extend({
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
