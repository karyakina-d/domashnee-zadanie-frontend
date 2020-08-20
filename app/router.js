import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-domashnee-zadanie-passport-l');
  this.route('i-i-s-domashnee-zadanie-passport-e',
  { path: 'i-i-s-domashnee-zadanie-passport-e/:id' });
  this.route('i-i-s-domashnee-zadanie-passport-e.new',
  { path: 'i-i-s-domashnee-zadanie-passport-e/new' });
  this.route('i-i-s-domashnee-zadanie-profession-l');
  this.route('i-i-s-domashnee-zadanie-profession-e',
  { path: 'i-i-s-domashnee-zadanie-profession-e/:id' });
  this.route('i-i-s-domashnee-zadanie-profession-e.new',
  { path: 'i-i-s-domashnee-zadanie-profession-e/new' });
  this.route('i-i-s-domashnee-zadanie-service-request-l');
  this.route('i-i-s-domashnee-zadanie-service-request-e',
  { path: 'i-i-s-domashnee-zadanie-service-request-e/:id' });
  this.route('i-i-s-domashnee-zadanie-service-request-e.new',
  { path: 'i-i-s-domashnee-zadanie-service-request-e/new' });
});

export default Router;
