function CountryService($http) {
    
  const service = this;

  service.dark = '';
  
  service.getCountries = () => {        
    return $http.get('https://restcountries.com/v2/all', {cache: true})
  }


  service.getCountryDetails = (id) => {
    let countryRequestURL = `https://restcountries.com/v2/alpha/${ id }`;
    return $http.get(countryRequestURL);
  }

  service.getCountryName = (id) => {
    let countryNameURL = `https://restcountries.com/v2/alpha/${ id }`;
    return $http.get(countryNameURL);
  }


};
    

angular.module('CountryApp')
.service('CountryService', ['$http', CountryService]); // Passing $http service as dependency for our service