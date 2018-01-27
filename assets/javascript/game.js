

$(document).ready(function() {

var wins = 0;
var loss = 0;
var gemSum;
var goalNumber;

//Start of Game

var startGame = function() {

                goalNumber = 0;
                gemSum = 0;
                $("#goalNum").text(0); 
                $("#scoreNum").text(0); 
                $("#inxsText").text("Press the colored gems to generate your score.");


        var createGoal = function() {
                min = Math.ceil(19);
                max = Math.floor(120);
                return Math.floor(Math.random() * (120 - 19 + 1)) +19;   
        }
        
createGoal();
        
        goalNumber = createGoal();
          console.log(goalNumber);
        $("#goalNum").text(goalNumber); 


        var crystalNumber = function() {
                min = Math.ceil(1);
                max = Math.floor(12);
                return (Math.floor(Math.random() * (12 - 1 + 1)) +1);
        }

        for (i = 0; i < 4; i++) {
                var crystalValue = crystalNumber();
                console.log(crystalValue);
                //$("#crystal" + (i + 1)).text(crystalValue);
                $("#crystal" + (i + 1)).attr("crystal-val", crystalValue);
        }
}
startGame();

// crystal calculations

        var chooseCrystal = function() {
           
                var gemPress = parseInt($(this).attr("crystal-val"));
                                //console.log($(this).attr("crystal-val"));
                                console.log(gemPress);
                        
                         gemSum = gemSum + gemPress;
                                //console.log(gemSum);
                        $("#scoreNum").text(gemSum);


                var compareScores = function() {
                        //console.log(goalNumber);
                        //console.log(gemSum);
                        if (goalNumber === gemSum) {
                                //alert("Wins");
                                wins++;
                                $("#winsNum").text(wins);
                                $("#inxsText").text("You win! Press the blue gem if you want to play again.");

                        } else if (goalNumber < gemSum) {
                                //alert("Loss");
                                loss++;
                                $("#lossNum").text(loss);
                                $("#inxsText").text("You lose! Press the blue gem if you want to play again");

                        } else {}

                }
                compareScores();

} //chooseCrystal close bracket

$("#blueCrystal").on("click", startGame);
$(".crystal").on("click", chooseCrystal);



}); //readyFunction close
















