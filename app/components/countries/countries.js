import countriesComponent from './countries.component';

export default app => {
  app.directive('countries', countriesComponent);

  if (ENVIRONMENT === 'test') {
    require('./countries.test.js');
  }
}
