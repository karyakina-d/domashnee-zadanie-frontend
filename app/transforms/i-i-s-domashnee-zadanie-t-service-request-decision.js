import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tServiceRequestDecisionEnum from '../enums/i-i-s-domashnee-zadanie-t-service-request-decision';

export default FlexberryEnum.extend({
  enum: tServiceRequestDecisionEnum,
  sourceType: 'IIS.Domashnee_zadanie.tServiceRequestDecision'
});
