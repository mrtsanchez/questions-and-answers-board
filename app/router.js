import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('admin');
  this.route('edit', {path: '/edit-question/:question_id'});
  this.route('category', {path: '/category/:question_category'});
  this.route('banking');
  this.route('education');
  this.route('living');
  this.route('rental');
  this.route('ask');
});

export default Router;
