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
        <div class="filters">
          <div class="filters__right">
            <div class="input-icons">
              <i class="fa fa-search icon-search"></i>           
              <input type="text" class="filters__input" data-ng-model="search.name" placeholder="Search for a country...">
            </div>
          </div>

          <div class="filters__left">
            <div class="select-style input-icons">
              <i class="fa fa-caret-down icon-arrow"></i> 
              <select data-ng-model="search.region">
                <option value="" selected >Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>

        <div class="countries">

        <a href="#!/details/{{ country.alpha3Code }}" class="countrylink" ng-repeat="country in $ctrl.search.data | filter: {name: search.name, region: search.region}">

        <div class="country">
          <div ng-if="country.flag" class="country__flag" style="background: url({{ country.flag }}); background-size: cover; background-position: center; height: 185px;">
          </div>
          
          <div class="country__details">
            <h2 class="country__header">{{ country.name }}</h2>
            <p ng-if="country.population" class="country__info"><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
            <p ng-if="country.region" class="country__info"><strong>Region:</strong> {{ country.region }}</p>
            <p ng-if="country.capital" class="country__info"><strong>Capital:</strong> {{ country.capital }}</p>     
          </div>

        </div>
        </a>
      `, // or use templateUrl
    controller: HomeController,
  });