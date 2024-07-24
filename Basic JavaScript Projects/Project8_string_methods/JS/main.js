//concatenate method in javascript to create a sentence
function Quote() {
    var part_1 = "The trees are in their autumn beauty, ";
    var part_2 = "The woodland paths are dry, ";
    var part_3 = "Under the October twilight the water ";
    var part_4 = "Mirrors a still sky; ";
    var part_5 = "Upon the brimming water among the stones ";
    var part_6 = "Are nine-and-fifty swans.";
    var verse = part_1.concat(part_2, part_3, part_4, part_5, part_6);
    document.getElementById("Concatenate") .innerHTML = verse;s
}
//Slice method to select two characters from the below sentence
function slice_Method() {
    var Sentence = "Do or do not! There is no try.";
    var Section = Sentence.slice(10,12);
    document.getElementById("Slice").innerHTML = Section;
}
//Upper Case Method
function UpperCaseMethod() {
    let text = "Every adventure requires a first step.";
    let result = text.toUpperCase();
    document.getElementById("Upper_Case").innerHTML = result;
}
//Search method
function Search_Method() {
    let text = "There is white chalk in the white cliffs of Dover."
    let position = text.search("white");
    document.getElementById("Search").innerHTML = position;
}
//Numbers to string method
function String_Method() {
    var X = 160;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//Precision method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//Fixed Method returning 7
function fixedMethod() {
    let num = 6.74856982;
    let n = num.toFixed();
    document.getElementById("Fixed").innerHTML = n;
}
//Value of method to return guitar makes for the object guitar
function Value_of_Method() {
    const guitars = [" Fender", " Gibson", " Ibanez", " Gretsch"];
    const myArray = guitars;
    document.getElementById("Value").innerHTML = myArray;
}
