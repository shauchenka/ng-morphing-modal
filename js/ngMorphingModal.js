angular.module('click-toggle', []).directive(
    'clickToggleClass', function() {
        return function(scope, elem, attrs) {
            var classToAppend = attrs['clickToggleClass'];
            var classAppended = false;
            elem.on('click', function() {
                classAppended = !classAppended;
                elem.toggleClass(classToAppend, classAppended);
            });
        });
    });