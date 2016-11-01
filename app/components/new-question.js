import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion() {
      var params = {
        questiontitle: this.get('questiontitle'),
        category: this.get('category'),
        author: this.get('author'),
        details: this.get('details'),
        date: this.get('date'),
      };
      this.sendAction('askQuestion', params);
    },
    updateValue(value){
      this.set('category', value);
    }
  }
});
