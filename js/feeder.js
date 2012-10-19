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
    //    // Grab the container we will put the results into
    //    var container = document.getElementById("content");
    //    container.innerHTML = '';
    //
    //    // Loop through the feeds, putting the titles onto the page.
    //    // Check out the result object for a list of properties returned in each entry.
    //    // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON
    //    for (var i = 0; i < result.feed.entries.length; i++) {
    //      var entry = result.feed.entries[i];
    //      var div = document.createElement("div");
    //      div.appendChild(document.createTextNode(entry.title));
    //      container.appendChild(div);
    //    }
    console.log(data, 'Feed');
    
  }
  else{
    console.log(data.error);
  }
  
}



/**
 * Feeder Routing
 * Get the current route and Call theme function
 */
Feeder.prototype.route = function(){
  
}


var feeder = new Feeder();

$(function(){
  feeder.init();
})