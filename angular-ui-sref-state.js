(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'module', 'angular' ], function (module, angular) {
            module.exports = factory(angular);
        });
    } else if (typeof module === 'object') {
        module.exports = factory(require('angular'));
    } else {
        if (!root.mp) {
            root.mp = {};
        }

        root.mp.uiSrefState = factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    // Copied from angular-ui-router code
    function parseStateRef(ref, current) {
        var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
        if (preparsed) {
            ref = current + '(' + preparsed[1] + ')';
        }
        parsed = ref.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
        if (!parsed || parsed.length !== 4) {
            throw new Error('Invalid state ref "' + ref + '"');
        }
        return { state: parsed[1], paramExpr: parsed[3] || null };
    }

    // Copied from angular-ui-router code
    function stateContext(el) {
        var stateData = el.parent().inheritedData('$uiView');

        if (stateData && stateData.state && stateData.state.name) {
            return stateData.state;
        }
    }

    return angular.module('mp.uiSrefState', [])
        .service('$uiSrefState', [ '$state', function ($state) {
            return {
                getTargetStateOfElement: function (element) {
                    var ref = parseStateRef(element.attr('ui-sref'), $state.current.name),
                        base = stateContext(element);

                    return $state.get(ref.state, base);
                }
            };
        }]);
}));
