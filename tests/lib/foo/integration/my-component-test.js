import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks, {
    resolver: engineResolverFor('foo')
  });

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');
    this.router.setupRouter();
  });

  test('it renders', async function(assert) {
    assert.expect(0);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MyComponent />`);
  });
});
