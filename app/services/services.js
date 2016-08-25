import countriesApiService from './countriesApi/countriesApi';

export default app => {
  INCLUDE_ALL_MODULES([countriesApiService], app);
}
