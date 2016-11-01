import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  displayQuestion: true,
  actions: {
    delete(question) {
        if (confirm('Are you sure you want to delete this question?')) {
          this.sendAction('deleteQuestion', question);
        }
    },
    showUpdateForm(){
      this.set('updateQuestionForm', true);
      this.set('displayQuestion', false);
    },
    update(question) {
      var params = {
        questiontitle: this.get('questiontitle'),
        category: this.get('category'),
        author: this.get('author'),
        details: this.get('details'),
        date: this.get('date'),
      };
      this.set('updateQuestionForm', false);
      this.set('displayQuestion', true);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
