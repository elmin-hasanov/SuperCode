const output = document.querySelector<HTMLParagraphElement>("#output");

    if (output){
    
        let counter: number = 2;

    do {
        output.innerHTML += `<p>${counter}</p>` ;
        counter += 2;
    } while (counter <= 20);
}


// für mich zu übung noch mal ohne if bedingung 

const output2 = document.querySelector("#output") as HTMLParagraphElement;

let countdown: number = 2;

do {
    output2.innerHTML += `<p> Gerade zahlen ${countdown}</p>`
    countdown += 2;
} while (countdown <= 20);
