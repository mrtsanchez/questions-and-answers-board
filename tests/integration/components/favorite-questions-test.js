import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('favorite-questions', 'Integration | Component | favorite questions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{favorite-questions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#favorite-questions}}
      template block text
    {{/favorite-questions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
