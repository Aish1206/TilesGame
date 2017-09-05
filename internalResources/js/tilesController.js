mainApp.controller("tilesController",function($scope){
    $scope.records = [
        "1","2","3","4","5","6","7","8"
    ]
    $scope.delete=function(x)
    {
        var index=$scope.records.indexOf(x);
          $scope.records.splice(parseInt(index), 1); 
    }
    $scope.doNothing=function()
    {
        
    }
});