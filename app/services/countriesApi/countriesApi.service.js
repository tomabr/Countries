let countriesApiService = function countriesApiServiceFn ($http, $q) {

  let url = 'https://restcountries.eu/rest/v1/all';

  return {
    name: 'countriesApi',
    getAllCountries: function() {
      let deferred = $q.defer();

      $http.get(url).then(function(response) {
        let date = angular.fromJson(response.data);
        deferred.resolve(date);
      }, function(error) {
        deferred.reject({message: 'Problem with connection'});
      });
      return deferred.promise;
    }
  };
};

export default countriesApiService;
