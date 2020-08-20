import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import tCountryEnum from '../../../enums/i-i-s-domashnee-zadanie-t-country';

export let Model = Mixin.create({
  firstNameLat: DS.attr('string'),
  lastNameLat: DS.attr('string'),
  secondNameLat: DS.attr('string'),
  sex: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  placeOfBirth: DS.attr('string'),
  dateOfIssue: DS.attr('date'),
  validUntil: DS.attr('date'),
  numberSeries: DS.attr('string'),
  country: DS.attr('i-i-s-domashnee-zadanie-t-country', { defaultValue: tCountryEnum.Empty })
});

export let ValidationRules = {
  firstNameLat: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.firstNameLat.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastNameLat: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.lastNameLat.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  secondNameLat: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.secondNameLat.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sex: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.sex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOfBirth: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.dateOfBirth.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  placeOfBirth: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.placeOfBirth.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOfIssue: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.dateOfIssue.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  validUntil: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.validUntil.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  numberSeries: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.numberSeries.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  country: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-passport.validations.country.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PassportE', 'i-i-s-domashnee-zadanie-passport', {
    lastNameLat: attr('Last name lat', { index: 0 }),
    firstNameLat: attr('First name lat', { index: 1 }),
    secondNameLat: attr('Second name lat', { index: 2 }),
    sex: attr('Sex', { index: 3 }),
    dateOfBirth: attr('Date of birth', { index: 4 }),
    placeOfBirth: attr('Place of birth', { index: 5 }),
    dateOfIssue: attr('Date of issue', { index: 6 }),
    validUntil: attr('Valid until', { index: 7 }),
    numberSeries: attr('Number series', { index: 8 }),
    country: attr('Country', { index: 9 })
  });

  modelClass.defineProjection('PassportL', 'i-i-s-domashnee-zadanie-passport', {
    lastNameLat: attr('Last name lat', { index: 0 }),
    firstNameLat: attr('First name lat', { index: 1 }),
    secondNameLat: attr('Second name lat', { index: 2 }),
    sex: attr('Sex', { index: 3 }),
    dateOfBirth: attr('Date of birth', { index: 4 }),
    placeOfBirth: attr('Place of birth', { index: 5 }),
    dateOfIssue: attr('Date of issue', { index: 6 }),
    validUntil: attr('Valid until', { index: 7 }),
    numberSeries: attr('Number series', { index: 8 }),
    country: attr('Country', { index: 9 })
  });
};
