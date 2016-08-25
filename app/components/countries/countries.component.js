import template from './countries.html';
import controller from './countries.controller';

let countriesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'countriesCtrl',
    bindToController: true
  };
};

export default countriesComponent;
