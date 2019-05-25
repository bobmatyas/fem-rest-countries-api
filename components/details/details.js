function CountryDetailsController(CountryService, $q, $routeParams) {
  
  var ctrl = this;

  ctrl.contentToShow = '';

  ctrl.getCountryDetails = (id) => {
    
    return $q(function (resolve, reject) {
      CountryService.getCountryDetails(id)
        .then((response) => {
          let details = response;
          ctrl.contentToShow = details;
        });
    });
  }

  ctrl.getCountryDetails($routeParams.id);

}




angular.module('CountryApp').component('countryDetails', {
  template: `
    <section id="country-details">
      
      <img ng-if="$ctrl.contentToShow.data.flag" src="{{ $ctrl.contentToShow.data.flag }}" alt="flag of {{ $ctrl.contentToShow.data.name }}" />

      <h2>{{ $ctrl.contentToShow.data.name }}</h2>

      <p ng-if="$ctrl.contentToShow.data.nativeName"><strong>Native Name:</strong> {{ $ctrl.contentToShow.data.nativeName }}</p>
      <p ng-if="$ctrl.contentToShow.data.population"><strong>Population:</strong> {{ $ctrl.contentToShow.data.population }}</p>
      <p ng-if="$ctrl.contentToShow.data.region"><strong>Region:</strong> {{ $ctrl.contentToShow.data.region }}</p>
      <p ng-if="$ctrl.contentToShow.data.subregion"><strong>Sub Region:</strong> {{ $ctrl.contentToShow.data.subregion }}</p>
      <p ng-if="$ctrl.contentToShow.data.capital"><strong>Capital:</strong> {{ $ctrl.contentToShow.data.capital }}</p>

      <p ng-if="$ctrl.contentToShow.data.topLevelDomain[0]"><strong>Top Level Domain:</strong> {{ $ctrl.contentToShow.data.topLevelDomain[0] }}</p>
      <p ng-if="$ctrl.contentToShow.data.currencies"><strong>Currencies:</strong> {{ $ctrl.contentToShow.data.currencies }}</p>
      <p ng-if="$ctrl.contentToShow.data.languages"><strong>Languages:</strong> {{ $ctrl.contentToShow.data.languages }}</p>

      <h3 ng-if="$ctrl.contentToShow.data.borders.length > 0">Borders</h3>

      <p ng-if="$ctrl.contentToShow.data.borders"> {{ $ctrl.contentToShow.data.borders }} </p>

    </section>`, // or use templateUrl
  controller: CountryDetailsController
});