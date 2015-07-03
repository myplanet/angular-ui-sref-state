# angular-ui-sref-state
Resolves the target state object of a ui-sref

## Usage

```js
angular
    .module('myModule', [ 'ui.router', 'mp.uiSrefState' ])
    .directive('myDirective', [ '$uiSrefState', function ($uiSrefState) {
        restrict: 'E',
        
        link: function (state, element) {
            var targetState = $uiSrefState.getTargetStateOfElement(element);
            
            // do something with the targetState object
        }
    });
```
