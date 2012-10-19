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
  this.state = 0;
  //this.rootUrl = document.location.protocol+'//'+(document.location.hostname||document.location.host);
  this.rootUrl = blog.baseUrl;
}

/**
 * Create Routes
 */
Route.prototype.create = function(feedData){
  this.routes = {};
  
  for(var i = 0; i < feedData.length; i++){
    
    route[feedData[i].link.replace(this.rootUrl, '')] = {
      articleId : i
    };
  }
  console.log(route, 'Routes Created');
}



var route = new Route();
$(function(){
  //Init Routes
  route.init();
  
  $('a[href^="/"],a[href^="' + route.rootUrl + '"]').on('click',function(event){
    var $this = $(this), 
    url = $this.attr('href'), 
    title = $this.attr('title')||null, 
    relativeUrl = $(this).attr('href').replace(route.rootUrl,'');
    document.location.hash = relativeUrl;
    event.preventDefault(); 
    
    History.pushState({
      state: route.state++
    }, title, relativeUrl); // logs {state:1}, "State 1", "?state=1"

    
    return false;
  });
  
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
    //Call Router
  });

//  // Change our States
//  History.pushState({
//    state:1
//  }, "State 1", "?state=1"); // logs {state:1}, "State 1", "?state=1"


})(window);