$(document).ready(function(){
    
// Generates random number
var Random=Math.floor(Math.random()*102)+19;
    
// Display random number as "Number to match:"
$('#numToMatch').text(Random);
    
//Generate random number for each crystal
var num1= Math.floor(Math.random()*12)+1;
var num2= Math.floor(Math.random()*12)+1;
var num3= Math.floor(Math.random()*12)+1;
var num4= Math.floor(Math.random()*12)+1;

// Variables to keep track of wins, losses, and score
var wins= 0;
var losses = 0;
var playerScore= 0; 
    
$('#wins').text(wins);
$('#losses').text(losses);
  
// Reset game
function reset(){
  Random=Math.floor(Math.random()*102)+19;
  console.log(Random)
  $('#numToMatch').text(Random);
  num1= Math.floor(Math.random()*12)+1;
  num2= Math.floor(Math.random()*12)+1;
  num3= Math.floor(Math.random()*12)+1;
  num4= Math.floor(Math.random()*12)+1;
  playerScore= 0;
  $('#totalScore').text(playerScore);
} 

// Display wins
function youwin(){
  $("#win-or-lose").html("<h2>You win!</h2>");
  wins++; 
  $('#wins').text(wins);
  reset();
}
  
// Display losses
function youlose(){
  $("#win-or-lose").html("<h2>You lose!</h2>");
  losses++;
  $('#losses').text(losses);
  reset()
}
  
// Clicking crystals
$('.red').on ('click', function(){
  playerScore = playerScore + num1;
  $("#win-or-lose").html("<h2></h2>");
  console.log("New playerScore= " + playerScore);
  $('#totalScore').text(playerScore); 
    if (playerScore == Random){
      youwin();
    }
    else if ( playerScore > Random){
      youlose();
    }   
})  

$('.blue').on ('click', function(){
  playerScore = playerScore + num2;
  $("#win-or-lose").html("<h2></h2>");
  console.log("New playerScore= " + playerScore);
  $('#totalScore').text(playerScore); 
      if (playerScore == Random){
        youwin();
      }
      else if ( playerScore > Random){
        youlose();
      } 
})  

$('.yellow').on ('click', function(){
  playerScore = playerScore + num3;
  $("#win-or-lose").html("<h2></h2>");
  console.log("New playerScore= " + playerScore);
  $('#totalScore').text(playerScore);
      if (playerScore == Random){
          youwin();
      }
      else if ( playerScore > Random){
        youlose();
      } 
})  
    
$('.green').on ('click', function(){
  playerScore = playerScore + num4;
  $("#win-or-lose").html("<h2></h2>");
  console.log("New playerScore= " + playerScore);
  $('#totalScore').text(playerScore);
      if (playerScore == Random){
        youwin();
      }
      else if ( playerScore > Random){
        youlose();
      }
});   
}); 