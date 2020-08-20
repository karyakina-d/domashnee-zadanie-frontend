import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashnee-zadanie-passport', 'Unit | Model | i-i-s-domashnee-zadanie-passport', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-domashnee-zadanie-passport',
    'model:i-i-s-domashnee-zadanie-patent',
    'model:i-i-s-domashnee-zadanie-profession',
    'model:i-i-s-domashnee-zadanie-service-request',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
