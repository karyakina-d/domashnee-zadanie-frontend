import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tCountryEnum from '../enums/i-i-s-domashnee-zadanie-t-country';

export default FlexberryEnum.extend({
  enum: tCountryEnum,
  sourceType: 'IIS.Domashnee_zadanie.tCountry'
});
