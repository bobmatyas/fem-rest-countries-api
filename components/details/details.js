function CountryDetailsController(CountryService, $q, $routeParams) {
  
  var ctrl = this;

  ctrl.contentToShow = '';

  ctrl.getCountryDetails = (id) => {
    
    return $q(function (resolve, reject) {
      CountryService.getCountryDetails(id)
        .then((response) => {
          let details = response;
          ctrl.contentToShow = details;
          resolve();
        });
    });
  }

  
  ctrl.countryName = '';

  ctrl.getCountryName = (id) => {
    return $q(function (resolve, reject) {
      CountryService.getCountryName(id)
        .then((response) => {
          let details = response;
          ctrl.countryName = details.data.name;
          return ctrl.countryName;
        });
    });
  }

  // load country info on initial page load

  ctrl.getCountryDetails($routeParams.id);

}




angular.module('CountryApp').component('countryDetails', {
  template: `
    <section class="country-details">
      
      <button type="button" class="button button--back" back-button> Back</button>

      <div class="details">
        <div class="details__flag">
          <img ng-if="$ctrl.contentToShow.data.flag" class="details__flag__image" src="{{ $ctrl.contentToShow.data.flag }}" alt="flag of {{ $ctrl.contentToShow.data.name }}" />
        </div>

        <div class="details__info">

          <h2 class="details__info__header">{{ $ctrl.contentToShow.data.name }}</h2>

          <div class="details__info__statistics">

            <div class="details__info__statistics__left">
              <p ng-if="$ctrl.contentToShow.data.nativeName"><strong>Native Name:</strong> {{ $ctrl.contentToShow.data.nativeName }}</p>
              <p ng-if="$ctrl.contentToShow.data.population"><strong>Population:</strong> {{ $ctrl.contentToShow.data.population.toLocaleString() }}</p>
              <p ng-if="$ctrl.contentToShow.data.region"><strong>Region:</strong> {{ $ctrl.contentToShow.data.region }}</p>
              <p ng-if="$ctrl.contentToShow.data.subregion"><strong>Sub Region:</strong> {{ $ctrl.contentToShow.data.subregion }}</p>
              <p ng-if="$ctrl.contentToShow.data.capital"><strong>Capital:</strong> {{ $ctrl.contentToShow.data.capital }}</p>          
            </div>

            <div class="details__info__statistics__right">
              <p ng-if="$ctrl.contentToShow.data.topLevelDomain[0]"><strong>Top Level Domain:</strong> {{ $ctrl.contentToShow.data.topLevelDomain[0] }}</p>
              <p ng-if="$ctrl.contentToShow.data.currencies"><strong>Currencies:</strong> <span ng-repeat="currency in $ctrl.contentToShow.data.currencies">{{ currency.name }}<font ng-show="!$last">, </font></span></p>
              <p ng-if="$ctrl.contentToShow.data.languages"><strong>Languages:</strong> <span ng-repeat="language in $ctrl.contentToShow.data.languages"> {{ language.name }}<font ng-show="!$last">, </font></span></p>
            </div>
          </div>
        
          <div ng-if="$ctrl.contentToShow.data.borders.length > 0" class="details__info__border__heading"><strong>Border Countries:</strong> 
            <div class="details__info__neighbors">
              <a ng-repeat="border in $ctrl.contentToShow.data.borders" class="details__info__neighbors__list__item" href="#!/details/{{ border }}">{{  border }}</a>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>`, // or use templateUrl
  controller: CountryDetailsController
})
.directive('backButton', function(){
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.bind('click', function () {
              history.back();
              scope.$apply();
          });
      }
  }
});