
//Load google libs
google.load("feeds", "1");


//All Google Codes
$(function(){  
  if(feeder){
    google.setOnLoadCallback(feeder.loadFeed());
    console.log('sent');
  }
  else{
    alert('Feeder not ready');
  }
})
