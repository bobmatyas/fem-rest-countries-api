function CountryDetailsController(CountryService, $q, $routeParams) {
  
  var ctrl = this;

  ctrl.contentToShow = '';

  ctrl.getCountryDetails = (id) => {
    
    return $q(function (resolve, reject) {
      CountryService.getCountryDetails(id)
        .then((response) => {

          let details = response;
          
          console.log(details);
          

          ctrl.contentToShow = details;
        });
    });
  }

  ctrl.getCountryDetails($routeParams.id);

}




angular.module('CountryApp').component('countryDetails', {
  template: `
    <section id="country-details">
      
      <h2>{{ $ctrl.contentToShow.data.name }}</h2>

    </section>`, // or use templateUrl
  controller: CountryDetailsController
});