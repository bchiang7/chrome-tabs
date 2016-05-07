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
                    })

            }
        };

    }]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmUgdGhlIGNocm9tZVRhYnNBcHAgbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jeVxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjaHJvbWVUYWJzQXBwJywgWyd1aS5ib290c3RyYXAnXSk7XG5cbi8vIERlY2xhcmUgdGhlIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgLy8gdGFicyBjb2RlIGdvZXMgYmVsb3dcblxuICAgICAgICAvLyB0YWIgY291bnRlclxuICAgICAgICB2YXIgY291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gYXJyYXkgdG8gc3RvcmUgdGhlIHRhYnMgaW5cbiAgICAgICAgJHNjb3BlLnRhYnMgPSBbXTtcblxuICAgICAgICAvLyBhZGQgdGFiIHRvIHRoZSBhcnJheVxuICAgICAgICB2YXIgYWRkVGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUudGFicy5wdXNoKHsgdGl0bGU6ICdUYWIgJyArIGNvdW50ZXIsIGNvbnRlbnQ6ICdUYWIgJyArIGNvdW50ZXIgfSk7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUudGFic1skc2NvcGUudGFicy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHJlbW92ZSB0YWIgYnkgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVRhYiA9IGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHNjb3BlIGZ1bmN0aW9uc1xuICAgICAgICAkc2NvcGUuYWRkVGFiID0gYWRkVGFiO1xuICAgICAgICAkc2NvcGUucmVtb3ZlVGFiID0gcmVtb3ZlVGFiO1xuXG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDEwIHRhYnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBhZGRUYWIoKTtcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIC5kaXJlY3RpdmUoJ3RhYkhpZ2hsaWdodCcsIFtmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gbW92aW5nIGhpZ2hsaWdodCBjb2RlIGJlbG93XG4gICAgICAgIC8vIHJlcGxhY2VzIHRoZSB0YWIgYmFja2dyb3VuZCB3aXRoIHJhZGlhbCBncmFkaWVudCB0aGF0IHN0YXJ0cyBhdCB0aGUgY3VycmVudCBtb3VzZSBwb2ludGVyIGNvb3JkaW5hdGVzIHdoZW4gcGxhY2VkIG92ZXIgdGhlIHRhYlxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBIZXJlIGlzIHRoZSBtYWpvciBqUXVlcnkgdXNhZ2Ugd2hlcmUgd2UgYWRkIHRoZSBldmVudFxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbmVycyBtb3VzZW1vdmUgYW5kIG1vdXNlb3V0IG9uIHRoZSB0YWJzIHRvIGluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAvLyB0aGUgbW92aW5nIGhpZ2hsaWdodCBmb3IgdGhlIGluYWN0aXZlIHRhYnNcbiAgICAgICAgICAgICAgICB2YXIgeCwgeSwgaW5pdGlhbF9iYWNrZ3JvdW5kID0gJyNjM2Q1ZTYnO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS5wYWdlWCAtIHRoaXMub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gZS5wYWdlWSA9IHRoaXMub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBiYWNrZ3JvdW5kIHdoZW4gbW91c2UgbW92ZXMgb3ZlciBpbmFjdGl2ZSB0YWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1vdXNlb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBcdC8vIHJldHVybiBpbml0aWFsIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYlxuICAgICAgICAgICAgICAgICAgICBcdGVsZW1lbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
