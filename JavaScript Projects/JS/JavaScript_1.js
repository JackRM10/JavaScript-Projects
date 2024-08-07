//Switch statement in javascript>
function Guitar_function() {
    var Guitar_Output;
    var Guitars = document.getElementById("guitar_makes").value;
    var Guitar_String = " is a great guitar make, rock on!";
    switch(Guitars ) { 
        case "Gibson":
            Guitar_Output = "Gibson" + Guitar_String;
        break;
        case "Fender":
            Guitar_Output = "Fender" + Guitar_String;
        break;
        case "PRS":
            Guitar_Output = "PRS" + Guitar_String;
        break;
        case "Ibanez":
            Guitar_Output = "Ibanez" + Guitar_String;
        break;
        case "Gretsch":
            Guitar_Output = "Gretsch" + Guitar_String;
        break;
        case "Martin":
            Guitar_Output = "Martin" + Guitar_String;
        break;
        case "Taylor":
            Guitar_Output = "Taylor" + Guitar_String;
        break;
        default:
        Guitar_Output = "Please enter a guitar exactly as written on the list.";
    }
    document.getElementById("Output").innerHTML = Guitar_Output;
}
//Using get element by class name method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
//Drawing a circle on a canvas element in HTML
    var c = document.getElementById("ID_Name");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
//Gradient method in canvas element
const d = document.getElementById("Gradient");
const ctx = d.getContext("3d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "Yellow");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);