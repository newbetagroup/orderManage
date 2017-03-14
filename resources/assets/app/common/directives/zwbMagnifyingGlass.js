/**
 * Created by geekzwb on 2017/2/14.
 */
(function () {

    'use strict';

    angular.module('zwb').directive('zwbMagnifyingGlass', function () {
        return {
            restrict: 'EA',
            scope: {
              src: '@ngSrc'
            },
            link: function (scope, element, attr) {
                element.bind('mouseenter', function() {
                    element.after('<div class="magnify-picture"><img src="' + scope.src + '" /></div>');
                });
                element.bind('mouseleave', function() {
                    element.parent().children('.magnify-picture').remove();
                });
            }
        }
    })

})();