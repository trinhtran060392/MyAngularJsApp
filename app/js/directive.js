var app = angular.module('myDirective',[]);
app.directive("myForm", function(){
	return {
		restrict: 'E',
		templateUrl: "partials/form.html"
	};
});
app.directive("tabPanel", function(){
	 return {
        restrict: "E",
        templateUrl: "partials/tabs_detail.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
});
