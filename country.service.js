function CountryService(http) {
    
  const service = this;

  service.getCountries = () => {        
    return http.get('https://restcountries.eu/rest/v2/all')
  }


  service.getCountryDetails = (id) => {
    let countryRequestURL = `https://restcountries.eu/rest/v2/alpha/${ id }`;
    return http.get(countryRequestURL);
  }

  service.getCountryName = (id) => {
    let countryRequestNameURL = `https://restcountries.eu/rest/v2/alpha/${ id }`;
    return http.get(countryRequestNameURL);
  }

};
    

angular.module('CountryApp')
.service('CountryService', ['$http', CountryService]); // Passing $http service as dependency for our service