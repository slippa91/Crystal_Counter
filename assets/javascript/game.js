// alert("Connected");

$(document).ready(function() {

var wins = 0;
var losses = 0;

//Start of Game

var startGame = function(event){

var gemPress;
var gemSum = 0;

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
    alert("crystal clicked");

    gemPress = parseInt($(this).attr("crystal-val"));
    console.log($(this).attr("crystal-val"));
    gemSum = gemSum + gemPress;
    $("#scoreNum").text(gemSum);

}



    // if (gemSum < goalNumber) {
    //     $("#scoreNum").text(gemSum);
    // } else if (gemSum === goalNumber) {
    //     wins++;
    //     $("#winsNum").text(wins);
    //     $().text("You win! Please press 'Enter' to play again.")
    // }




document.removeEventListener("click", startGame);
$(".crystal").on("click", chooseCrystal)



} // startGame close

document.addEventListener("click", startGame);


}); //readyFunction close
















