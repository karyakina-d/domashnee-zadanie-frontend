import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDomashnee_zadaniePassportLForm from './forms/i-i-s-domashnee-zadanie-passport-l';
import IISDomashnee_zadanieProfessionLForm from './forms/i-i-s-domashnee-zadanie-profession-l';
import IISDomashnee_zadanieServiceRequestLForm from './forms/i-i-s-domashnee-zadanie-service-request-l';
import IISDomashnee_zadaniePassportEForm from './forms/i-i-s-domashnee-zadanie-passport-e';
import IISDomashnee_zadanieProfessionEForm from './forms/i-i-s-domashnee-zadanie-profession-e';
import IISDomashnee_zadanieServiceRequestEForm from './forms/i-i-s-domashnee-zadanie-service-request-e';
import IISDomashnee_zadaniePassportModel from './models/i-i-s-domashnee-zadanie-passport';
import IISDomashnee_zadaniePatentModel from './models/i-i-s-domashnee-zadanie-patent';
import IISDomashnee_zadanieProfessionModel from './models/i-i-s-domashnee-zadanie-profession';
import IISDomashnee_zadanieServiceRequestModel from './models/i-i-s-domashnee-zadanie-service-request';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-domashnee-zadanie-passport': IISDomashnee_zadaniePassportModel,
    'i-i-s-domashnee-zadanie-patent': IISDomashnee_zadaniePatentModel,
    'i-i-s-domashnee-zadanie-profession': IISDomashnee_zadanieProfessionModel,
    'i-i-s-domashnee-zadanie-service-request': IISDomashnee_zadanieServiceRequestModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'domashnee-zadanie': {
          caption: 'domashnee-zadanie',
          title: 'domashnee-zadanie',
          'i-i-s-domashnee-zadanie-service-request-l': {
            caption: 'i-i-s-domashnee-zadanie-service-request-l',
            title: 'i-i-s-domashnee-zadanie-service-request-l'
          },
          документы: {
            caption: 'документы',
            title: 'документы',
            'i-i-s-domashnee-zadanie-passport-l': {
              caption: 'i-i-s-domashnee-zadanie-passport-l',
              title: 'i-i-s-domashnee-zadanie-passport-l'
            }
          },
          справочники: {
            caption: 'справочники',
            title: 'справочники',
            'i-i-s-domashnee-zadanie-profession-l': {
              caption: 'i-i-s-domashnee-zadanie-profession-l',
              title: 'i-i-s-domashnee-zadanie-profession-l'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-domashnee-zadanie-passport-l': IISDomashnee_zadaniePassportLForm,
    'i-i-s-domashnee-zadanie-profession-l': IISDomashnee_zadanieProfessionLForm,
    'i-i-s-domashnee-zadanie-service-request-l': IISDomashnee_zadanieServiceRequestLForm,
    'i-i-s-domashnee-zadanie-passport-e': IISDomashnee_zadaniePassportEForm,
    'i-i-s-domashnee-zadanie-profession-e': IISDomashnee_zadanieProfessionEForm,
    'i-i-s-domashnee-zadanie-service-request-e': IISDomashnee_zadanieServiceRequestEForm
  },

});

export default translations;
