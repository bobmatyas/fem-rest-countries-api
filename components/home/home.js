function HomeController(CountryService, $q) {
    
  const ctrl = this;

  ctrl.search = '';

  ctrl.getCountries = () => {
    
    return $q(function (resolve, reject) {
      
      CountryService.getCountries()
        .then((response) => {
          ctrl.search = response;
        });
    });
  };

  // run countries on page load
  ctrl.getCountries();
}
  
  angular.module('CountryApp').component('home', {
    template: `
      <section id="countries">

        <input type="text" data-ng-model="search.name" placeholder="Search for a country...">

        <div ng-repeat="country in $ctrl.search.data | filter:search" class="country">
          <img ng-if="country.flag" class="country__image" src="{{ country.flag }}" alt="flag of {{ country.name }}" />
          <h2><a href="#!/details/{{ country.alpha3Code }}">{{ country.name }}</a></h2>
          <p ng-if="country.population"><strong>Population:</strong> {{ country.population }}</p>
          <p ng-if="country.region"><strong>Region:</strong> {{ country.region }}</p>
          <p ng-if="country.capital"><strong>Capital:</strong> {{ country.capital }}</p>
        </div>

      </section>`, // or use templateUrl
    controller: HomeController
  });