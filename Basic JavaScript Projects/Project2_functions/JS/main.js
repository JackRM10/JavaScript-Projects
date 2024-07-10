function My_First_Function() { //This is a button that alters when clicked
    var str = "This is the button text!";
    document.getElementById("Button_Text") .innerHTML = str;
    }

    function myFunction() {
        var sentence = "I am learning"; //This is an operator element
        sentence += " a lot from this book!";
        document.getElementById("Concatenate").innerHTML = sentence;
    }
    //This is a get element string value
    document.getElementById("quote").innerHTML = "Whatever satisfies the soul is truth. - Walt Whitman";

    //This is a get element
    function myFunction(p1, p2) {
        return p1 * p2;
      }
      
      let result = myFunction(10, 2);
      document.getElementById("sum").innerHTML = result;

