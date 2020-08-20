import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Domashnee_zadanie',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Domashnee_zadanie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Domashnee_zadanie',
          title: 'Domashnee_zadanie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'domashnee-zadanie': {
          caption: 'Domashnee_zadanie',
          title: 'Domashnee_zadanie',
          'i-i-s-domashnee-zadanie-service-request-l': {
            caption: 'Обращения',
            title: ''
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-domashnee-zadanie-passport-l': {
              caption: 'Паспорта',
              title: ''
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-domashnee-zadanie-profession-l': {
              caption: 'Профессии',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
