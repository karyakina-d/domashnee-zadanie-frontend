import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashnee-zadanie-service-request', 'Unit | Serializer | i-i-s-domashnee-zadanie-service-request', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-domashnee-zadanie-service-request',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-domashnee-zadanie-t-country',
    'transform:i-i-s-domashnee-zadanie-t-service-request-decision',
    'transform:i-i-s-domashnee-zadanie-t-service-request-status',
    'transform:i-i-s-domashnee-zadanie-t-service-request-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
