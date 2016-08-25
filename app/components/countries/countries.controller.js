export default class CountriesController {
  constructor(countriesApi) {
    this.name = 'countries';

    let continents = {};
    countriesApi.getAllCountries()
      .then(response => {
          angular.forEach(response, function(country) {
            if (!!country.region) {
              if (!continents[country.region]) {
                continents[country.region] = {
                  checked: false,
                  countries: [],
                  reverse: false,
                  amountSelectedCountries: 0
                }};
              country.checked = false;
              continents[country.region].countries.push(country);
            }
          });

          this.continents = continents;
        },
        error => {});
  }

  checkContinentChecbox(name) {
    let amount = 0;
    let result = false;

    angular.forEach(this.continents[name].countries, function(country,index,arr) {
      if (country.checked) {
        amount++;
      }

      if (amount === arr.length) {
        result = true;
      }
    });

    this.continents[name].amountSelectedCountries = amount;
    this.continents[name].checked = true ? result : false;
  }

  checkAllCountries(name, $event) {
    $event.stopImmediatePropagation();
    let continent = this.continents[name];
    let value = continent.checked;

    angular.forEach(continent.countries, function(country) {
      country.checked = value;
    });

    continent.amountSelectedCountries = !!value ? continent.countries.length : 0;
  }

  sortBy(name) {
    this.continents[name].reverse = !this.continents[name].reverse;
  }
}
