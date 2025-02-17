    
    function howOld() {

    let age = document.getElementById("age").value;
    let output = age >= 18 ? "über 18" : "unter 18";
    
    
    console.log(output);
    document.getElementById("output").innerHTML = output;
    }