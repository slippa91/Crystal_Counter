// alert("Connected");

$(document).ready(function() {

var wins = 0;
var losses = 0;



var startGame = function(){

//id goalNum
var goalNumber = function() {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (120 - 19 + 1)) +1;
}
console.log(goalNumber());
document.querySelector("#goalNum").innerText = goalNumber();
















} //startGame closing loop

document.addEventListener("click", startGame);

});