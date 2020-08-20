import { Serializer as PassportSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-passport';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PassportSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
