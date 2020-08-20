import { Serializer as ProfessionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-profession';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProfessionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
