//
function my_Dictionary() {
    var Guitar = {
        Make: "Gibson",
        Model: "Les Paul",
        Type: "Black Beauty",
        Artist: "Jimmy Page",
    };
    document.getElementById("Dictionary").innerHTML = Guitar.Model;
}
//
function my_KVPs() {
    var Classes = {
        ALG: "ALGEBRA 1",
        ALG: "ALGEBRA 2",
        HIS: "HISTORY",
        ENG: "ENGLISH LITERATURE",
        PSY: "PSYCHOLOGY"
    };
    document.getElementById("Classes").innerHTML = Classes.ALG;
}
//
function my_Dictionary() {
    var Guitar = {
        Make: "Gibson",
        Model: "Les Paul",
        Type: "Black Beauty",
        Artist: "Jimmy Page",
    };
    delete Guitar.Model;
    document.getElementById("Dictionary").innerHTML = Guitar.Model;
}