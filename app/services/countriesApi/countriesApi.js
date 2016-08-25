import countriesApiService from './countriesApi.service';

export default app => {
  app.factory('countriesApi', countriesApiService);

  if (ENVIRONMENT === 'test') {
    require('./countriesApi.test.js');
  }
}
