function check() {
    let input = document.getElementById("input").value;
    let check = input >= 50 ? "Bestanden" : "Nicht bestanden";

    console.log(check);
    document.getElementById("output").innerHTML = check;
}



function check2() {
    let input2 = document.getElementById("input2").value;
    let check2 = input2 <= 1975 ? "Du bist über 50" : "Du bist unter 50";

    console.log(check2);

    document.getElementById("output2").innerHTML = check2;    
}