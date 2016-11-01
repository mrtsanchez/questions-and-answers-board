import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  displayQuestion: true,
  actions: {
    delete(question) {
        if (confirm('Are you sure you want to delete this question?')) {
          this.sendAction('deleteQuestion', question);
        }
    },
    showUpdateForm(){
      this.set('updateQuestion', true);
      this.set('displayQuestion', false);
    },
    updateQuestion(question) {
      var params = {
        questiontitle: this.get('questiontitle'),
        category: this.get('category'),
        author: this.get('author'),
        details: this.get('details'),
        date: this.get('date'),
      };
      this.set('updateQuestion', false);
      this.set('displayQuestion', true);
      this.sendAction('update', question, params);
    }
  }
});
