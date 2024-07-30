//Function to create a loop that counts to ten
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//string length method
function string_length() {
    let text = "We are such stuff as dreams are made of.";
    let length = text.length;
    document.getElementById("Quote").innerHTML = length;
}
//Creating a for loop of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]
var Content = "";
var Y;
    function for_loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content; 
    }
//Array function
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] - "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML= "in this picture the cat is " + Cat_Picture[2] + ".";
}
//constant function for player
function constant_function() {
    const soccer_player = {player: "Josh Sargent", club: "Norwich City", position: "Striker"};
    soccer_player.position = "Striker";
    soccer_player.value = "$25.4M";
    document.getElementById("Constant").innerHTML = "The value of " + soccer_player.player + " who plays for " + soccer_player.club + " is " + soccer_player.value; 
}
// Using the let keyword to rerturn the following number 22, 10, 22
function let_keyword() {
    var X = 22;
document.write(X);
{
    let X = 10;
    document.write("<br>" + X);
}
document.write("<br>" + X);
getComputedStyle.getElementById("number").innerHTML = X;
}
//Return statement
function ReturnFunction(name) {
  return "Hello my name is " + name;
}
document.getElementById("Who").innerHTML = ReturnFunction("Jack");
//Let function to return obeject Finn Russell
let rugby_player = {
    player: "Finn Russell, ",
    position: "Fly-half, ",
    club: "Bath, ",
    national_team: "Scotland.",
    description : function() {
        return "The top player is " + this.player + this.position + this.club + this.national_team;
    }
};
document.getElementById("top_player").innerHTML = rugby_player.description();
//Break statement
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;
//continue statement
let list = "";
for (let i = 0; i < 15; i++) {
  if (i === 5) { continue; }
  list += "The number is " + i + "<br>";
}
document.getElementById("continue_loop").innerHTML = list