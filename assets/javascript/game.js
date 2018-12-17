$(document).ready(function() {

  var compChoice = Math.floor(Math.random() * 120) + 19;
  var userScore = 0;
  var gemValue;
  var crystalArray = [];
  var wins = 0;
  var losses = 0;
  console.log("Reach this score: " + compChoice);
  $("#score1").text("Reach this score: " + compChoice);
  


  $(".crystal").each(function(index) {
      gemValue = Math.floor(Math.random() * 12) + 1;
      crystalArray[index] = gemValue;
      console.log("Gem " + index + ": " + crystalArray[index]);
    });


  $(".crystal").on("click", function() {

      userScore = userScore + crystalArray[$(this).index()]; 
      console.log("The score is: " + userScore);
      $("#total-score").text(userScore);
      
      if (userScore < compChoice) {
        console.log(userScore);
      }
      
      else if (userScore === compChoice) {
          $("#userwon").text("You made a perfect score!");
          wins++
          $("#winner").text(wins);
      }
      
      else {
          alert("Ha you trash!")
          losses++
          $("#loser").text(losses);
          alert("PLEASE TRY AGAIN!");
      }
      
     
  });

});