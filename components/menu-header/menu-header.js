function MenuHeaderController($rootScope) {
    
  const ctrl = this;

  $rootScope.bodyClass = '';

  ctrl.toggleDark = () => {
    if (!$rootScope.bodyClass) {
      $rootScope.bodyClass = 'dark';
    } else if ($rootScope.bodyClass) {
      $rootScope.bodyClass = '';
    }
  }
}
  
  angular.module('CountryApp').component('menuHeader', {
    template: `
      <header class="header">
        <h1 class="header__title"><a href="index.html" class="header__link">Where in the world?</a></h1>
        <button type="button" ng-click="$ctrl.toggleDark();" class="toggle__dark__mode"><i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode</button>
      </header>`, // or use templateUrl
    controller: MenuHeaderController,
  });