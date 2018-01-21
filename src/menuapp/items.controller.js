
(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController)

  ItemsController.$inject = [/*'MenuDataService'*/'thisitem']
  function ItemsController(/*MenuDataService*/thisitem){
    var ItemsControl = this;
    ItemsControl.items = [];

    if(thisitem.data.hasOwnProperty("category")){
      ItemsControl.items = thisitem.data.menu_items;
      ItemsControl.name = thisitem.data.category.name;
      ItemsControl.shortName = thisitem.data.category.short_name;
    }else{
      ItemsControl.name = "None chosen";
      ItemsControl.shortName = "";
    }
  }

})();
