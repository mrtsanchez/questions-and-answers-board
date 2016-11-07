import Ember from 'ember';

export default Ember.Component.extend({
  userActions: Ember.inject.service(),
  QuestionNoFav: true,
  QuestionFav: false,
  actions: {
    favQuestion(question){
      this.get('userActions').add(question);
      this.set('QuestionNoFav', false);
      this.set('QuestionFav', true);
    },
    removeFavQuestion(question){
      this.get('userActions').remove(question);
      this.set('QuestionNoFav', true);
      this.set('QuestionFav', false);
    }
  }
});
