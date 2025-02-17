function check() {
    let username = document.getElementById("username").value;

    let output = (username === null || username === undefined || username === "") ? "Unbekannt" : username;

    console.log(output);

    document.getElementById("output").innerHTML = output;
}