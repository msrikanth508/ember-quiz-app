import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | score-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:score-card');
    assert.ok(route);
  });
});
