/**
 * Created by geekzwb on 2017/3/14.
 */
angular.module('zwb').directive('zwbAttributes', [
    function () {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                attributes: '@'
            },
            link: function (scope, element, attrs, ctrl) {
                scope.attributes = JSON.parse(scope.attributes);
                var attributes = 'attributes: ';
                angular.forEach(scope.attributes, function (value, key) {
                    attributes += '<span class="attribute">' + value + '&nbsp;&nbsp;</span>';
                });
                element.append(attributes);
            }
        }
    }
]);