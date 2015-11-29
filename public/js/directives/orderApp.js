app.directive('orderApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/orderApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Order",
      scope.ordered = false,

      scope.order = function() {
        element.toggleClass('btn-active')
        if(scope.ordered) {
          scope.buttonText = "Order";
          scope.ordered = false;
        } else {
          scope.buttonText = "Done";
          scope.ordered = true;
        }
      }
    }
  };
});
