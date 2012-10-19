/* 
    Document   : route
    Created on : 19 Oct, 2012, 2:13:43 PM
    Author     : Arjun (@raj_arjun)
    Description:
        Function for routing
*/

/**
 * Route object
 */
var Route = function(){
}

/**
 * Route settings
 */
Route.prototype.settings = function(){
  
  }

/**
 * Initialize Routes
 */
Route.prototype.init = function(){
  this.routes = blog.routes;
}


var route = new Route();
$(function(){
  route.init();
  
});


(function(window,undefined){

  // Prepare
  var History = window.History; // Note: We are using a capital H instead of a lower h
  if ( !History.enabled ) {
    console.log('nohist');
    // History.js is disabled for this browser.
    // This is because we can optionally choose to support HTML4 browsers or not.
    return false;
  }

  // Bind to StateChange Event
  History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
    var State = History.getState(); // Note: We are using History.getState() instead of event.state
    History.log(State.data, State.title, State.url);
  });

//  // Change our States
//  History.pushState({
//    state:1
//  }, "State 1", "?state=1"); // logs {state:1}, "State 1", "?state=1"
//  History.pushState({
//    state:2
//  }, "State 2", "?state=2"); // logs {state:2}, "State 2", "?state=2"
//  History.replaceState({
//    state:3
//  }, "State 3", "?state=3"); // logs {state:3}, "State 3", "?state=3"
//  History.pushState(null, null, "?state=4"); // logs {}, '', "?state=4"
//  History.back(); // logs {state:3}, "State 3", "?state=3"
//  History.back(); // logs {state:1}, "State 1", "?state=1"
//  History.back(); // logs {}, "Home Page", "?"
//  History.go(2); // logs {state:3}, "State 3", "?state=3"

})(window);