import CountriesApiModule from './countriesApi'
import CountriesApiService from './countriesApi.service';

describe('CountriesApi', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = CountriesApiService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('countriesApi');
    });
  });
});
