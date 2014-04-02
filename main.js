$(document).ready(function(){

  // $(".header").hide();


  var events = [];
  events[0] = ["images/5kole.jpg", "Fiesta 5k Ole!","1247 15th Ave E Seattle, WA ","Saturday, May 3, 2014 at 9:30 AM","Photo of Fiest 5k Ole."];
  events[1] = ["images/circus.jpg", "The Jordan World Circus","110 9th Ave SW Puyallup, WA ","Tuesday, April 4, 2014 at 4:00 PM","Photo of The Jordan World Circus."];
  events[2] = ["images/johnGottman.jpg", "John Gottman, Ph.D. -Making Love Last and Marriage Work","1119 8th Ave Seattle WA ","Monday, May 5, 2014 at 7:00 PM", "Photo of John Gottman."];
  events[3] = ["images/bb.jpeg", "Bacon and Beer Classic","1250 1st Ave S Seattle, WA ","Saturday, May 17, 2014 at 1:00PM", "Photo of Beer and Bacon Classic."];
  events[4] = ["images/emeraldCity.png", "Emerald City Author Event","1415 5th Ave Seattle, WA ","Saturday, June 14, 2014 at 11:30 AM", "Photo of Emerald City Author Event."];
  events[5] = ["images/seattleChal.jpg", "Seattle Challenge 2014: The Ultimate Urban Scavenger Race","731 Westlake Ave N Seattle, WA ","Saturday, May 3, 2014 at 1:00 PM","Photo of Seattle Challenge 2014."];

  var events2 = [];
  events2[0] = ["images/seattleVice.jpg","Seattle Vice","700 Union St Seattle, WA ","Thursday, April 19, 2014 at 8:30PM","Photo of Seattle Vice event."];
  events2[1] = ["images/tivonRice.jpg","Tivon Rice","2324 Second Ave Seattle, WA ","Monday, April 11, 2014 at 9AM","Photo of Tivon Rice."];
  events2[2] = ["images/galenDisston.jpg","Galen Disston", "5213 Ballard Ave. N.W. Seattle, WA ", "Monday, March 31, 2014 at 8PM","Photo of Galen Disston."];
  events2[3] = ["images/process.jpg","Process","NW 900 12th Ave Seattle, WA ","Tuesday, June 15, 2014 at 12PM", "Photo of Process event."];
  events2[4] = ["images/Beijing1930.jpg","Beijing 1930","704 Terry Ave Seattle, WA ","Thursday, May 25, 2014 at 11AM","Photo of Beijing 1930 event."];
  events2[5] = ["images/littleShop.jpg","Little Shop of Horrors", "700 Union St Seattle, WA ", "Daily until June 15th", "Photo of Little Shop of Horrors event."];


  $("#searchSubmit").click(function(){
    var query = $("#zipCode").val();

    $(".header").show();

    if(query % 2 === 0){

      for(var i=0; i < events.length; i++){

      var title1 = events[i][1];
      var address1 = events[i][2];
      var date1 = events[i][3];


      $(".event-list").append(
          "<li class='event-entry'><div class='item clearfix'><div class='event-list-pic' style='background-image:url(" + events[i][0] + ")'></div><h1>" + title1 + "</h1><p class='time'>" + events[i][3] + "</p><p class='location'>" +  address1 + query + "</p></div></li>"
      );

    }
  }
    else{
      for(var j=0; j < events2.length; j++){
        var image = "style='background-image:url(" + events2[j][0] + ")'"
        var title = events2[j][1];
        var address = events2[j][2];
        var date = events2[j][3];

      $(".event-list").append(
          "<li class='event-entry'><div class='item clearfix'><div class='event-list-pic' style='background-image:url(" + events2[j][0] + ")'></div><h1>" + title + "</h1><p class='time'>" + events2[j][3] + "</p><p class='location'>" +  address + query + "</p></div></li>"
      );
      }
    }
    return false;
  });

  $("input").keypress(function(theKeyBeingPassed){
  if (theKeyBeingPassed.which == 13) {
    var query = $("#zipCode").val();

    $(".header").show();

    if(query % 2 === 0){

      for(var i=0; i < events.length; i++){

      var title1 = events[i][1];
      var address1 = events[i][2];
      var date1 = events[i][3];


      $(".event-list").append(
          "<li class='event-entry'><div class='item clearfix'><div class='event-list-pic' style='background-image:url(" + events[i][0] + ")'></div><h1>" + title1 + "</h1><p class='time'>" + events[i][3] + "</p><p class='location'>" +  address1 + query + "</p></div></li>"
      );

    }
  }
    else{
      for(var j=0; j < events2.length; j++){
        var image = "style='background-image:url(" + events2[j][0] + ")'"
        var title = events2[j][1];
        var address = events2[j][2];
        var date = events2[j][3];

      $(".event-list").append(
          "<li class='event-entry'><div class='item clearfix'><div class='event-list-pic' style='background-image:url(" + events2[j][0] + ")'></div><h1>" + title + "</h1><p class='time'>" + events2[j][3] + "</p><p class='location'>" +  address + query + "</p></div></li>"
      );
      }
    }
    return false;
  }
  });

});
