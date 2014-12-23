var myApp = angular.module('myApp',['myDirective']);
myApp.controller('HelloController',['$scope', function($scope){
	$scope.hello = 'Hello Trinh Ca Chim';

}]);
myApp.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
});
