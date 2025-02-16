function check() {
    let input = document.getElementById("input").value;
    let check = input > 0 ? "Positive Zahl" : (input < 0 ? "Negative Zahl" : "Die Zahl ist Null");

    console.log(check);

    document.getElementById("output").innerHTML = check;
}