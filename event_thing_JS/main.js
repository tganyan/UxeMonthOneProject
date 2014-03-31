$(document).ready(function(){


  var events = [];
  events[0] = ["images/5kole.jpg", "Fiesta 5k Ole!","1247 15th Ave E <br> Seattle, WA ","Saturday, May 3, 2014 at 9:30 AM"];
  events[1] = ["images/circus.jpg", "The Jordan World Circus","110 9th Ave SW <br> Puyallup, WA ","Tuesday, April 4, 2014 at 4:00 PM"];
  events[2] = ["images/johnGottman.jpg", "John Gottman, Ph.D. -Making Love Last and Marriage Work","1119 8th Ave <br> Seattle WA ","Monday, May 5, 2014 at 7:00 PM"];
  events[3] = ["images/bb.jpeg", "Bacon and Beer Classic","1250 1st Ave S <br> Seattle, WA ","Saturday, May 17, 2014 at 1:00PM"];
  events[4] = ["images/emeraldCity.png", "Emerald City Author Event","1415 5th Ave <br> Seattle, WA ","Saturday, June 14, 2014 at 11:30 AM"];
  events[5] = ["images/seattleChal.jpg", "Seattle Challenge 2014: The Ultimate Urban Scavenger Race","731 Westlake Ave N <br> Seattle, WA ","Saturday, May 3, 2014 at 1:00 PM"];

  var events2 = [];
  events2[0] = ["images/seattleVice.jpg","Seattle Vice","700 Union St <br> Seattle, WA ","Thursday, April 19, 2014 at 8:30PM"];
  events2[1] = ["images/tivonRice.jpg","Tivon Rice","2324 Second Ave <br> Seattle, WA ","Monday, April 11, 2014 at 9AM"];
  events2[2] = ["images/galenDisston.jpg","Galen Disston", "5213 Ballard Ave. N.W. <br> Seattle, WA ", "Monday, March 31, 2014 at 8PM"];
  events2[3] = ["images/process.jpg","Process","NW 900 12th Ave <br> Seattle, WA ","Tuesday, June 15, 2014 at 12PM"];
  events2[4] = ["images/Beijing1930.jpg","Beijing 1930","704 Terry Ave <br> Seattle, WA ","Thursday, May 25, 2014 at 11AM"];
  events2[5] = ["images/littleShop.jpg","Little Shop of Horrors", "700 Union St <br> Seattle, WA ", "Daily until June 15th"];

  $("#searchButton").click(function(){
    var query = $("#query").val();

    console.log(Number(query));

    if(query % 2 === 0){

      for(var i=0; i < events.length; i++){
        $("#event").append("<div><img src='" + events[i][0] + "'>" + "<br>" + events[i][1] + "<br>" + events[i][2] + query + "<br>" + events[i][3] + "</div><br>");
      }
    }
    else{
      for(var j=0; j < events2.length; j++){
        $("#event").append("<div><img src='" + events2[j][0] + "'>" + "<br>" + events2[j][1] + "<br>" + events2[j][2] + query + "<br>" + events2[j][3] + "</div><br>");
      }
    }
    return false;
  });
});
