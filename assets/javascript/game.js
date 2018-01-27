// alert("Connected");

$(document).ready(function() {

var wins = 0;
var losses = 0;

//Start of Game

var startGame = function() {

var goalNumber = 0;
var gemSum = 0;
$("#goalNum").text(0); 
$("#scoreNum").text(0); 
$("#inxsText").text("Press the colored gems to generate your score.");

//id goalNum
        var goalNumber = function() {
                min = Math.ceil(19);
                max = Math.floor(120);
                return Math.floor(Math.random() * (120 - 19 + 1)) +19;   
        }
        $("#goalNum").text(goalNumber);  

// id crystal#
        var crystalNumber = function() {
                min = Math.ceil(1);
                max = Math.floor(12);
                return (Math.floor(Math.random() * (12 - 1 + 1)) +1);
        }


        for (i = 0; i < 4; i++) {
                var crystalValue = crystalNumber();
                $("#crystal" + (i + 1)).text(crystalValue);
                $("#crystal" + (i + 1)).attr("crystal-val", crystalValue)
        }

// crystal calculations

        var chooseCrystal = function() {
           // alert("crystal clicked");

                var gemPress = parseInt($(this).attr("crystal-val"));
                                console.log($(this).attr("crystal-val"));
                        gemSum = gemSum + gemPress;
                        $("#scoreNum").text(gemSum);

                        if (gemSum === goalNumber) {
                                wins++;
                                $("#winsNum").text(wins);
                                $("#inxsText").text("You win! Press the blue gem if you want to play again.");

                        } else if (gemSum > goalNumber) {
                                losses++
                                $("#lossesNum").text(losses);
                                $("#inxsText").text("You lose! Press the blue gem if you want to play again");

                        } else {}

        } //chooseCrystal


} // startGame close



$("#blueCrystal").on("click", startGame);
$(".crystal").on("click", chooseCrystal);

//document.removeEventListener("click", startGame);
// document.addEventListener("click", startGame);


}); //readyFunction close
















