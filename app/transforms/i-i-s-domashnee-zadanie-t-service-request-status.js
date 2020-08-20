import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tServiceRequestStatusEnum from '../enums/i-i-s-domashnee-zadanie-t-service-request-status';

export default FlexberryEnum.extend({
  enum: tServiceRequestStatusEnum,
  sourceType: 'IIS.Domashnee_zadanie.tServiceRequestStatus'
});
