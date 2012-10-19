/**
 * @file Theme Library
 * @description Theme function to generate HTML for elemtns
 * @author arjun
 */

/**
 * Theme object
 */
var Theme = function(){}

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
 * @param options additional options
 * @returns HTML for page
 */
Theme.prototype.page = function(variables, options){
  
  var output = "";
  
  output += "<div class='page'>";  
  
  //Header
  output += "<header class='page-header' role='banner'>";  
  output += "</header>";  
  
  //Body
  output += "<div class='main'>";  
  
  //Main Content Area
  output += "<div class='primary' role='main'>";   
  output += variables.content;
  output += "</div>";  
  
  //Sidebar
  output += "<aside class='sidebar' role='complementary'>";   
  output += variables.sidebar;
  output += "</aside>";  
  
  //Footer
  output += "<footer class='page-footer' role='contentinfo'>";  
  output += "</footer>";  
  
  output += "</div>";
  
  
  return output;
}


/**
 * Template for indivisual articles
 * @param article the article object
 * @param options additional options
 * @return HTML article
 */

Theme.prototype.article = function(article, options){
  
  var output = '';
  
  //Article
  output += "<article class='post' id='" +  article.id + "'>";
  
  output += "<h1>" + article.title + "</h1>";
  output += "<div class='content'>" + article.content + "</div>";  
  
  output += "</article>";
  
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


Theme.prototype.block = function(block, options){
  
  var output = "<section>";
  
}












/**
 * Init Theme object
 */
var theme = new Theme();