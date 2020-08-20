import { Serializer as PatentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-patent';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PatentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
