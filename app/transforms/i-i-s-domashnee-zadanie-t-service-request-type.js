import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tServiceRequestTypeEnum from '../enums/i-i-s-domashnee-zadanie-t-service-request-type';

export default FlexberryEnum.extend({
  enum: tServiceRequestTypeEnum,
  sourceType: 'IIS.Domashnee_zadanie.tServiceRequestType'
});
