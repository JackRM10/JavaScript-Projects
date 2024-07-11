//Dicitionary for Guitar, result Model
function my_Dictionary() {
    var Guitar = {
        Make: "Gibson",
        Model: "Les Paul",
        Type: "Black Beauty",
        Artist: "Jimmy Page",
    };
    document.getElementById("Dictionary").innerHTML = Guitar.Model;
}
//KVPS, two KVPS have the same key, result lowest down key displayed
function my_KVPs() {
    var Classes = {
        ALG: "ALGEBRA 1",
        ALG: "ALGEBRA 2",
        HIS: "HISTORY",
        ENG: "ENGLISH LITERATURE",
        PSY: "PSYCHOLOGY",
    };
    document.getElementById("Classes").innerHTML = Classes.ALG;
}
// Dictionary with delete statement, returns underfined result
function my_Dictionary_Delete() {
    var Guitar = {
        Make: "Gibson",
        Model: "Les Paul",
        Type: "Black Beauty",
        Artist: "Jimmy Page",
    };
    delete Guitar.Model;
    document.getElementById("DictionaryDelete").innerHTML = Guitar.Model;
}