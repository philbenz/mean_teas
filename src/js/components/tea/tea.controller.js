(function () {
  'use strict';

  console.log('starting the tea.controller file');

  angular.module('teaApp.components.tea')
    .controller('TeaController', TeaController);

  TeaController.$inject = ['TeaService'];

  function TeaController(TeaService) {
    console.log('in tea controller and calling TeaService');
    this.teas = TeaService.getTeas();
    //TeaService.getTea()
    // .then(({ data: { cards }}) => {
    //   this.cards = cards;
    // });
  }
})();
