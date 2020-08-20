import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  series: DS.attr('string'),
  number: DS.attr('string'),
  validUntil: DS.attr('string'),
  issueDate: DS.attr('string'),
  profession: DS.belongsTo('i-i-s-domashnee-zadanie-profession', { inverse: null, async: false }),
  serviceRequest: DS.belongsTo('i-i-s-domashnee-zadanie-service-request', { inverse: 'patent', async: false })
});

export let ValidationRules = {
  series: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.series.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.number.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  validUntil: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.validUntil.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  issueDate: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.issueDate.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  profession: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.profession.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  serviceRequest: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-patent.validations.serviceRequest.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PatentE', 'i-i-s-domashnee-zadanie-patent', {
    series: attr('Series', { index: 0 }),
    number: attr('Number', { index: 1 }),
    validUntil: attr('Valid until', { index: 2 }),
    issueDate: attr('Issue date', { index: 3 }),
    profession: belongsTo('i-i-s-domashnee-zadanie-profession', 'Profession', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' })
  });
};
