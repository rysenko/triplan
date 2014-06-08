require('./vendor/angular.min');
window._ = require('./vendor/lodash.underscore.min');
require('./vendor/angular-google-maps.min');

module.exports = angular.module('main', ['google-maps']);