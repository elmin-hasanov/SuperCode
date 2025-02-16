function output() {
    let select = parseInt(document.getElementById("select").value);
    let outputElement = document.getElementById("output");

    let outputText = "";

    switch (select) {
        case 1:
            outputText = innerHTML = "<p>Wasser<p><img src='./assets/img/wasser.jpg'></img>";
            break;
        case 2:
            outputText = "Cola";
            break;
        case 3:
            outputText = "Orangensaft";
            break;
        case 4:
            outputText = "Kaffee";
            break;
        case 5:
            outputText = "Tee";
            break;
        default:
            outputText = "Ungültig, bitte gib eine richtige Zahl ein";
            break;
    }

    outputElement.innerHTML = outputText;

    console.log(outputText);
}
