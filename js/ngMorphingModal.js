var myApp = angular.module('myApp', []).directive(
    'ngMorphingModal', function() {
        return function(scope, elem, attrs) {


            var MorphingModalObj = new MorphingModal({
                selectorId: '[data-type="modal-trigger"]',
                selectorObj: $('[data-type="modal-trigger"]'),
                onAfterClose: null,
                onAfterOpen: function(){}
            });

        }
    });


myApp.controller("MyController", ["$scope", function($scope) {
    $scope.name = "World";
}]);

