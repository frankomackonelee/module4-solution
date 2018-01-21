
(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController)

  ItemsController.$inject = [/*'MenuDataService'*/'thisitem']
  function ItemsController(/*MenuDataService*/thisitem){
    var ItemsControl = this;
    ItemsControl.items = [];

    if(thisitem.hasOwnProperty("category")){
      ItemsControl.items = thisitem.menu_items;
      ItemsControl.name = thisitem.category.name;
      ItemsControl.shortName = thisitem.category.short_name;
    }else{
      ItemsControl.name = "None chosen";
      ItemsControl.shortName = "";
    }
  }

})();
