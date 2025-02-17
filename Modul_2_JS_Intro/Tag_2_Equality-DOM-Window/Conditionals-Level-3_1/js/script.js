let budget = (Number(window.prompt("Bitte dein Budget eingeben: ")))

let klima = window.prompt("Lieblingsklima warm/kalt/mild? Eingeben bitte")

let art = window.prompt("Abenteuer oder Entspannung?")

let boxContainer = document.querySelector("header")


if (budget < 1200){
    console.log("Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.") ,boxContainer.innerHTML = "<h1>Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.</h2><img src='./assets/img/de.jpg'>";
} else if (budget >= 1200 && klima === "warm" && art === "Abenteuer"){
    console.log("Reise nach Thailand für ein Dschungelabenteuer!") ,boxContainer.innerHTML = "<h1>Reise nach Thailand für ein Dschungelabenteuer!</h2><img src='./assets/img/tai.jpg'>";
} else if (budget >= 1200 && klima === "warm" && art === "Entspannung"){
    console.log("Reise nach Bali für einen Strandurlaub!") ,boxContainer.innerHTML = "<h1>Reise nach Bali für einen Strandurlaub!</h2><img src='./assets/img/bali.jpg'>";
} else if (budget >= 1200 && klima === "kalt" && art === "Abenteuer"){
    console.log("Perfekt für eine Nordlicht-Wanderung!") ,boxContainer.innerHTML = "<h1>Perfekt für eine Nordlicht-Wanderung!</h2><img src='./assets/img/nord.jpg'>";
} else if (budget >= 1200 && klima === "kalt" && art === "Entspannung"){
    console.log("Heiße Quellen und wunderschöne Landschaften!") ,boxContainer.innerHTML = "<h1>Heiße Quellen und wunderschöne Landschaften!</h2><img src='./assets/img/land.jpg'>";
} else if (budget >= 1200 && klima === "mild" && art === "Entspannung" | art === "Abenteuer"){
    console.log("Spanien oder Portugal sind großartige Reiseziele für dich!") ,boxContainer.innerHTML = "<h1>Spanien oder Portugal sind großartige Reiseziele für dich!</h2><img src='./assets/img/barc.jpg'>";
} else {
    console.log("Ungültige eingabe") ,boxContainer.innerHTML = "<h1>Ungültige eingabe ❌</h2>";
}