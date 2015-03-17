var myApp = angular.module('myApp', []).directive(
    'ngMorphingModal', function() {
        return function(scope, elem, attrs) {

            var classToAppend = attrs['clickToggleClass'];
            var classAppended = false;

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

