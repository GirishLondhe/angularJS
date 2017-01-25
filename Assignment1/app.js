(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.lunchmenu = "";
  $scope.message ="";

  $scope.checkMenu = function () {
    var menu = $scope.lunchmenu;
    var menuitem= menu.split(',');
    var itemcount=menuitem.length;
    var spaces=0;

    for(var i=0;i<itemcount;i++)
    {
      if(menuitem[i].trim()=="")
          spaces++;
    }

    itemcount=itemcount-spaces;

    if(itemcount==0)
    {
      $scope.message="First enter the menu!";
      $scope.mstyle={"color":"red"};
      $scope.tstyle={"border-color":"red"};
    }
    else if (itemcount<=3)
    {
       $scope.message="Enjoy!";
       $scope.mstyle={"color":"green"};
       $scope.tstyle={"border-color":"green"};
    }
    else
    {
       $scope.message="Too Much!";
       $scope.mstyle={"color":"green"};
       $scope.tstyle={"border-color":"green"};
    }
  };

}
})();
