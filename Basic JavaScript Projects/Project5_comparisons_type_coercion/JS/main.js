//
document.write("10"+12);
//Using the NAN function to display a true result
function myFunction1() {
    document.getElementById("demo1").innerHTML = isNaN('This is a string');
}
//Using the NAN function to display a false result
function myFunction2() {
    document.getElementById("demo2").innerHTML = isNaN('010');
}
//Writing infinity
document.write(5E610);
//Writing -infinity
document.write(-7E424);
//Boolean logic "Fasle" and True"
document.write(10>7);
document.write(24<21);
//Console.log function to return 20
console.log(10+10);
//Console.log function using boolean logic to return true
console.log(100>64);
//Equality rul
document.write(17==17);
//Multiple comparisons using the triple equal signs
X = 10;
Y = 10;
document.write(X === Y);

G = 56;
H = "87";
document.write(G === H);

C = 96;
D = "96";
document.write(C === D);

E = 71;
F = 72;
document.write(E === F);

//Using AND operator to display true
document.write(20 > 12 && 45 > 29);
//Using AND operator to display false
document.write(17 > 25 && 45 > 42);
//Using OR operator to display true
document.write(17 > 25 || 45 > 42);
//Using AND operator to display false
document.write(17 > 25 || 45 > 62);

//Using Not function to retuen true
function not_function1() {
    document.getElementById("demo3").innerHTML = !(100 > 50);
}
//Using Not function to retuen false
function not_function2() {
    document.getElementById("demo4").innerHTML = !(50 > 100);
}

