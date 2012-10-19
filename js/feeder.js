/* 
    Document   : feeder
    Created on : 19 Oct, 2012, 11:32:16 AM
    Author     : Arjun (@raj_arjun)
    Description:
        Main Feeder Function
*/


/**
 * Feeder object
 */
var Feeder = function(){

}

/**
 * Feeder Settings
 */
Feeder.prototype.settings = function(){
  
  }


/**
 * Feeder Methods
 */


/**
 * Init 
 * Init is called on page load
 */

Feeder.prototype.init = function(){  
  this.blog = blog;  
}

Feeder.prototype.loadFeed = function(){
    
  console.log('called');
  // Create a feed instance that will grab Digg's feed.
  var feed = new google.feeds.Feed(blog.rss);
  //Set number of entries to load
  feed.setNumEntries(this.blog.numEntries)
  
  if(this.blog.cache){
    feed.includeHistoricalEntries();
  }
  
  // Calling load sends the request off.  It requires a callback function.  
  feed.load(this.onFeedLoad);
}

/**
 * On Feed Data Loaded
 */
Feeder.prototype.onFeedLoad = function(data){
  // Our callback function, for when a feed is loaded.
  this.feedData = data.feed;
  if (!data.error) {
    // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON

    //console.log(data, 'Feed');
  //Add Routes - Create all routes
    route.create(this.feedData.entries);
  //Call Router
    
    
  }
  else{
    console.log(data.error);
  }
  
}


var feeder = new Feeder();

$(function(){
  feeder.init();
})