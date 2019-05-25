"use strict";
angular
  .module("CountryApp")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/home", {
        // Load the home component
        template: "<home></home>"
      })
      .when('/details/:id', {
        template: '<country-details></country-details>'
      })
      .otherwise( {
        // Otherwise, go home component
        redirectTo: "/home"
      })
}]);