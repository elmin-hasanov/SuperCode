let username = window.prompt("Geben Sie Ihren Benutzernamen ein:");

let password = window.prompt("Geben Sie Ihr Passwort ein:");

if (username === "admin" && password === "secure123") {
    console.log("Login erfolgreich ✅");
    document.body.classList.add("green");

} else if (username !== "admin" && password === "secure123") {
    console.log("Unbekannter User ❌");
    document.body.classList.add("red");

} else if (username === "admin" && password !== "secure123") {
    console.log("Falsches Passwort ❌");
    document.body.classList.add("red");

} else {
    console.log("Login fehlgeschlagen ❌");
    document.body.classList.add("red");
}