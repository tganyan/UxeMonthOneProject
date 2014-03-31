$(document).ready(function(){

var events = [];
events[0] = ["http://placehold.it/150x150", "Fiesta 5k Ole!","1247 15th Ave E <br> Seattle, WA ","Saturday, May 3, 2014 at 9:30 AM"];
events[1] = ["http://placehold.it/150x150","The Jordan World Circus","123 Somestreet <br> City, State ","April 20, 2014"];
events[2] = ["http://placehold.it/150x150","Event3", "123 Somestreet <br> City, State ", "March 20, 2014"];

var events2 = [];
events2[0] = ["http://placehold.it/150x150","Event4","123 Somestreet <br> City, State ","May 3, 2014"];
events2[1] = ["http://placehold.it/150x150","Event5","123 Somestreet <br> City, State ","April 20, 2014"];
events2[2] = ["http://placehold.it/150x150","Event6", "123 Somestreet <br> City, State ", "March 20, 2014"];

$("#searchButton").click(function(){
  var query = $("#query").val();

  console.log(Number(query));

  if(query % 2 === 0){

  for(var i=0; i < events.length; i++){
    $("#event").append("<div><img src='" + events[i][0] + "'>" + "<br>" + events[i][1] + query + "<br>" + events[i][2] + "</div><br>");
  }}

  else{

    for(var j=0; j < events2.length; j++){
    $("#event").append("<div><img src='" + events2[j][0] + "'>" + "<br>" + events2[j][1] + "<br>" + events2[j][2] + "</div><br>");
  }
  }
  return false;

});

});
