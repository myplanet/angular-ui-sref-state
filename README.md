# angular-ui-sref-state

Resolves the target state object of a `ui-sref` attribute in applications using [angular-ui-router](https://github.com/angular-ui/ui-router).

## Usage

For example, if you're using angular-ui-router and you have an element directive that needs to resolve the target state of the `ui-sref` attribute:

```html
<my-directive ui-sref=".foo.bar">Foo Bar</my-directive>
```

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
