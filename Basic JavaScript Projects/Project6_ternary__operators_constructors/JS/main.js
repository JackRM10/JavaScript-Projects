//Ternary Operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Ternary Operator to vote
function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are too young to": "You can";
    document.getElementById("Ride").innerHTML = Can_vote + " vote.";
}

//Keyword assignment to return Guitar
function Guitar (Make, Model, Color) {
    this.Guitar_Make = Make;
    this.Guitar_Model = Model;
    this.Guitar_Color = Color;
}
var Steve = new Guitar ("Ibanez", "JEM PIA3761C", "ligth blue");
var Billie_Joe = new Guitar ("Gibson", "Les Paul Jr", "tv yellow");
var Jimi = new Guitar ("Fender", "Stratocaster", "cream");
function myFunction1() {
    document.getElementById("New_and_This").innerHTML = "Jimi plays a " + Jimi.Guitar_Model +  " made by " + Jimi.Guitar_Make + " colored " + Jimi.Guitar_Color;
}
//Nested function for counting
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 21;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}