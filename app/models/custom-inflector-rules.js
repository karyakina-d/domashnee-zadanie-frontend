import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('profession', 'Professions');
inflector.irregular('passport', 'Passports');
inflector.irregular('request', 'Requests');
inflector.irregular('patent', 'Patents');

export default {};
