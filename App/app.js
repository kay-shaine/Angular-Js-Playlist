var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            price: parseInt($scope.newninja.price),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.price = "";
    };

   

    $scope.message = "hey y'all";

    $scope.ninjas = [
        {
            name: 'bola',
            belt: 'blue',
            price: 100,
            available: true,
            thumb: "content\img\bola.png"
        },
        
        {
            name: 'Tunji',
            belt: 'black',
            price: 500,
            available: true,
            thumb: "content\img\tunji.png"
        }, 
        
        {
            name: 'Bolaji',
            belt: 'red',
            price: 300,
            available: false,
            thumb: "content\img\Bolaji.png"
        },
        
        {
            name: 'Taiwo',
            belt: 'yellow',
            price: 700,
            available: true,
            thumb: "content\img\taiwo.png"
        }
    
    ];

}]);
