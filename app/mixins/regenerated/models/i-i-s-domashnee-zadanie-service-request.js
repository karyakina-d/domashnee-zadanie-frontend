import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import tServiceRequestTypeEnum from '../../../enums/i-i-s-domashnee-zadanie-t-service-request-type';
import tServiceRequestDecisionEnum from '../../../enums/i-i-s-domashnee-zadanie-t-service-request-decision';

export let Model = Mixin.create({
  type: DS.attr('i-i-s-domashnee-zadanie-t-service-request-type', { defaultValue: tServiceRequestTypeEnum.Empty }),
  number: DS.attr('number'),
  date: DS.attr('string'),
  status: DS.attr('i-i-s-domashnee-zadanie-t-service-request-status'),
  permanentAddress: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  iNN: DS.attr('string'),
  serviceRequestDecision: DS.attr('i-i-s-domashnee-zadanie-t-service-request-decision', { defaultValue: tServiceRequestDecisionEnum.Empty }),
  decisionDate: DS.attr('string'),
  profession: DS.belongsTo('i-i-s-domashnee-zadanie-profession', { inverse: null, async: false }),
  passport: DS.belongsTo('i-i-s-domashnee-zadanie-passport', { inverse: null, async: false }),
  patent: DS.hasMany('i-i-s-domashnee-zadanie-patent', { inverse: 'serviceRequest', async: false })
});

export let ValidationRules = {
  type: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.type.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  date: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.date.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  permanentAddress: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.permanentAddress.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iNN: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.iNN.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serviceRequestDecision: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.serviceRequestDecision.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  decisionDate: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.decisionDate.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  profession: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.profession.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  passport: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.passport.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  patent: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-service-request.validations.patent.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ServiceRequestE', 'i-i-s-domashnee-zadanie-service-request', {
    type: attr('Type', { index: 0 }),
    number: attr('Number', { index: 1 }),
    date: attr('Date', { index: 2 }),
    status: attr('Status', { index: 3 }),
    permanentAddress: attr('Permanent address', { index: 4 }),
    phoneNumber: attr('Phone number', { index: 5 }),
    iNN: attr('INN', { index: 6 }),
    serviceRequestDecision: attr('Service request decision', { index: 7 }),
    decisionDate: attr('Decision date', { index: 8 }),
    profession: belongsTo('i-i-s-domashnee-zadanie-profession', 'Profession', {
      name: attr('Name', { index: 10 })
    }, { index: 9 }),
    passport: belongsTo('i-i-s-domashnee-zadanie-passport', 'Passport', {
      lastNameLat: attr('Last name lat', { index: 12 })
    }, { index: 11 }),
    patent: hasMany('i-i-s-domashnee-zadanie-patent', 'Patent', {
      series: attr('Series', { index: 0 }),
      number: attr('Number', { index: 1 }),
      validUntil: attr('Valid until', { index: 2 }),
      issueDate: attr('Issue date', { index: 3 }),
      profession: belongsTo('i-i-s-domashnee-zadanie-profession', 'Profession', {
        name: attr('Name', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('ServiceRequestEVidacha', 'i-i-s-domashnee-zadanie-service-request', {
    
  });

  modelClass.defineProjection('ServiceRequestL', 'i-i-s-domashnee-zadanie-service-request', {
    
  });
};
