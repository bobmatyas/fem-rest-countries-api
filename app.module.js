"use strict";
// setter syntax

var app = angular.module("CountryApp", ["ngRoute"]);

app.controller('bodyController', function($scope) {
  $scope.setBodyClass = function(_bodyCLass) {
    $scope.bodyClass = _bodyCLass;
    $scope.inLoginPage = ($scope.bodyClass === 'login');
  };
});