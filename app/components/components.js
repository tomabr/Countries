import countriesComponent from './countries/countries';
import homeComponent from './home/home';

export default app => {
  INCLUDE_ALL_MODULES([homeComponent, countriesComponent], app);
}
