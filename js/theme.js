/**
 * @file Theme Library
 * @description Theme function to generate HTML for elemtns
 * @author arjun
 */

/**
 * Theme object
 */
function Theme(){}

/**
 * Theme Settings
 */

Theme.prototype.settings = function(){
  
}


/**
 * Different theme function
 */

/**
 * Page Template
 * @param variables variables to show in the page
 * @returns HTML for page
 */
Theme.prototype.page = function(variables){
  
  var output = "";
  
  output += "<div class='page'>";
  
  output += "</div>";
  
  
  return output;
}

/**
 * Menu Template
 * @param menus array of menus in their weight order
 * @param options additional options for menu
 * @return HTML for menu
 */
Theme.prototype.menu = function(menus, options){
  var output = "<nav>";
  var liClassName = "leaf";
  
  var settings = $.extend({
    ulClass : '',
    ulId: ''
  }, options);
  
  output += "<ul id='" + settings.ulId + "' class='menu " + settings.ulClass + "'>";
  
  for(var i = 0; i < menus.length; i++){  
    
    liClassName += i ? "" : " first";
    
    liClassName += (i == (menu.length - 1)) ? " last" : "";
      
    
    output += "<li class='" + liClassName + "' >";
    
    output += "<a href='" + menu[i].href + "'>" + menu[i].title + "</a>";
    
    output += "</li>";
  }
  
  output += "</ul>";
  
  output += "<nav>";
  
  return output;
}