//Scope - global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_3() {
    var X = 10;
    document.write(20 + X + "<br>'");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3;
Add_numbers_4;

//Using console log to debug
function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5;
Add_numbers_6;

//Get date function
function get_Date() {
    if(new Date().getDay() <5) {
        document.getElementById("Greeting") .innerHTML = "Have a good day!";
    }
}

// If/Else statement for going on a ride,ride goers must be 48 inches or taller to go on the ride
function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 48) {
         Ride = "You can go on the ride!";
    }
    else {
        Ride = "You are not tall enough to go on the ride!";
    }
    document.getElementById ("How tall are you?").innerHTML = Ride;
}