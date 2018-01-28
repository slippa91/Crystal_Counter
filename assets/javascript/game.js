

$(document).ready(function() {

var wins = 0;
var loss = 0;
var gemSum;
var goalNumber;


var startGame = function() {

                goalNumber = 0;
                gemSum = 0;
                $("#goalNum").text(0); 
                $("#scoreNum").text(0); 
                $("#inxsText").text("Press the large colored gems to generate 'Your Score'.");


var createGoal = function() {
                min = Math.ceil(19);
                max = Math.floor(120);
                return Math.floor(Math.random() * (120 - 19 + 1)) +19;   
        }
        
createGoal();
        
        goalNumber = createGoal();
          //console.log(goalNumber);
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


var chooseCrystal = function() {
           
                var gemPress = parseInt($(this).attr("crystal-val"));                               
                        
                         gemSum = gemSum + gemPress;
                        $("#scoreNum").text(gemSum);


                var compareScores = function() {
                        //console.log(goalNumber);
                        //console.log(gemSum);
                        if (goalNumber === gemSum) {
                                wins++;
                                $("#winsNum").text(wins);
                                $("#inxsText").text("You WIN! Press the blue gem if you want to play again.");

                        } else if (goalNumber < gemSum) {
                                loss++;
                                $("#lossNum").text(loss);
                                $("#inxsText").text("You LOSE! Press the blue gem if you want to play again");

                        } else {}

                }
                compareScores();

}

$("#blueCrystal").on("click", startGame);
$(".crystal").on("click", chooseCrystal);



});
















