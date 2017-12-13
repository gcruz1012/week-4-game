var randomNumber = Math.floor(Math.random()*111)+19;

var scorecounter=0;

var wins=0;
var losses=0;

    var targetNumber= randomNumber;
    $("#number-to-guess").html(targetNumber);

function values(){
 var Values = Math.floor(Math.random()*12)+1;
 return Values
};

/*for(var i=0;i<4;i++){}*/
  function imageCrystal(){
    
    values();
  var imageCrystal=$("<img>");
  
  imageCrystal.addClass("crystal-image");
  
  imageCrystal.attr("src","http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  imageCrystal.attr("data-crystalvalue", values());

  $("#crystals").append(imageCrystal);
};

  function refresh(){
imageCrystal();
imageCrystal();
imageCrystal();
imageCrystal();
};
refresh();

  $(".crystal-image").on("click", function(){
      var crystalValues =($(this).attr("data-crystalvalue"));
      crystalValues = parseInt(crystalValues);
      scorecounter+=crystalValues;
      $("#Score").html("Score: "+scorecounter);

      if(scorecounter===randomNumber){
        scorecounter=0;
        wins++;
        $("#Wins").html("Wins: "+wins);
        randomNumber = Math.floor(Math.random()*111)+19;
           $("#number-to-guess").html(randomNumber);
        values();
        
      }
      else if(scorecounter>randomNumber){
        scorecounter=0;
        losses++;
        $("#Losses").html("Losses: "+losses);
         randomNumber= Math.floor(Math.random()*111)+19;
        $("#number-to-guess").html(randomNumber);
        values();
        
  }
      })
  