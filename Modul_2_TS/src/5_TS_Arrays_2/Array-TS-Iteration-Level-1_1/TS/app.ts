const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

const output = document.getElementById("output");

if (output) {
    getraenke.forEach(function(getraenk) {
        output.innerHTML += `<p>${getraenk}</p>`;
    });
}

console.log(getraenke);
