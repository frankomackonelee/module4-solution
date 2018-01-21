
(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController)

  CategoriesController.$inject = [/*'MenuDataService'*/'trythis']
  function CategoriesController(/*MenuDataService*/trythis){
    var CatController = this;
    CatController.items = [];

    CatController.checker = "set as nomal";

    CatController.items = trythis.data;

    // CatController.$onInit = function () {
    //   console.log("I'm onInit-ing");
    //
    //   CatController.checker = "set onInit";
    //
    //   MenuDataService.getAllCategories().then(function (result) {
    //     console.log("items received from data service")
    //     CatController.items = result.data;
    //     CatController.checker = "set when dataservice accessed";
    //   });
    //
    // };


  }

})();
