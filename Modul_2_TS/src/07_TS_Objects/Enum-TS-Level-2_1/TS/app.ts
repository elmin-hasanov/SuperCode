enum HtmlError { // Enum ist ein Objekt, das nur Zahlen oder Strings enthalten kann
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500,
}

function showHtmlError() {
    let error = Math.random() * 600; // Zufallszahl zwischen 0 und 600
    if (error < 300) { // 0 - 299
        return HtmlError[200]; // mit .Ok gibt man den Wert 200 zurueck und nicht den Key "OK" und mit [200] gibt man den Key "OK" zurueck.
    }
    if (error < 400) {
        return HtmlError[300];
    }
    if (error < 500) {
        return HtmlError[400];
    }
    return HtmlError[500];
}

console.log(showHtmlError());