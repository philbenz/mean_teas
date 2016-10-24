(function () {
  'use strict';

  //prefix directive so that it's not overridden by new HTML tags

  console.log('starting the tea directive file');

  angular.module('teaApp.components.tea')
    .directive('teaCatalog', TeaDirective);

  TeaDirective.$inject = [];

  function TeaDirective() {

    console.log('in the TeaDirective object...');

    return {
      restrict: 'E',
      controller: 'TeaController',
      controllerAs: 'vm',
      templateUrl: './js/components/tea/tea.html'
    };
  }
})();
