// Declare the chromeTabsApp module and its dependency
var app = angular.module('chromeTabsApp', ['ui.bootstrap']);

// Declare the controller
app
    .controller('AppCtrl', ['$scope', function($scope) {
        // tabs code goes below

        // tab counter
        var counter = 1;

        // array to store the tabs in
        $scope.tabs = [];

        // add tab to the array
        var addTab = function() {
            $scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
            counter++;
            $scope.tabs[$scope.tabs.length - 1].active = true;
        };

        // remove tab by index
        var removeTab = function(event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.tabs.splice(index, 1);
        };

        // initialize scope functions
        $scope.addTab = addTab;
        $scope.removeTab = removeTab;


        // For demonstration add 10 tabs
        for (var i = 0; i < 10; i++) {
            addTab();
        }
    }])
    .directive('tabHighlight', [function() {
        // moving highlight code below
        // replaces the tab background with radial gradient that starts at the current mouse pointer coordinates when placed over the tab

        return {
            restrict: 'A',
            link: function(scope, element) {
                // Here is the major jQuery usage where we add the event
                // listeners mousemove and mouseout on the tabs to initialize
                // the moving highlight for the inactive tabs
                var x, y, initial_background = '#c3d5e6';

                element
                    .removeAttr('style')
                    .mousemove(function(e) {
                        if (!element.hasClass('active')) {
                            x = e.pageX - this.offsetLeft;
                            y = e.pageY = this.offsetTop;

                            // set the background when mouse moves over inactive tab
                            element
                                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
                        }
                    })
                    .mouseout(function() {
                    	// return initial background color of the tab
                    	element.removeAttr('style');
                    });

            }
        };

    }]);
