//Addition operator
window.onload = function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math") .innerHTML = "2 + 2 = " + addition;
}
//Subtration operator
window.onload = function subtraction_Function() {
    var subtraction = 100 - 50;
    document.getElementById("Math-two") .innerHTML = "100 - 50 = " + subtraction;
}
//Multiplication operator
window.onload = function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("Math-three") .innerHTML = "2 + 2 = " + multiplication;
}
//Division operator
window.onload = function divion_Function() {
    var division = 48 / 6;
    document.getElementById("Math-four") .innerHTML = "48 / 6 = " + divison;
}
//Multiple math operators
window.onload = function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math-five") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
//Modulus operator (remainder)
window.onload = function modulus_Operator() {
    var simple_Math_one = 25 % 6;
    document.getElementById("Math-six").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math_one;
}
//Negation Operator
window.onload = function negation_Operator() {
    var x = 10;
    document.getElementById("Math-seven") .innerHTML = -x;
}
//Increment Operator
var X = 5;
X++;
document.write(X);

//Decrement Operator
var Y = 5.25;
Y--;
document.write(Y);

//Random function
window.alert(Math.randon() * 100);

//Math Obeject
function getNapier() {
    return Math.E;
  }
  getNapier(); // 2.718281828459045