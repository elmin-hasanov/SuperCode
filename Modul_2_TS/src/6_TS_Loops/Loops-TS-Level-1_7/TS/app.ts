const output = document.querySelector<HTMLParagraphElement>("#output");
if (output) {
    let counter = 0;

do {
  output.innerHTML += `<p>the number is ${counter}` ;
  counter++;
} while (counter <= 5);

}


// hier ist eine andere varienate wo man ohne if schreibt also sagt wenn output vorhanden ist 
// heist hier "as"  

const output2 = document.querySelector("#output") as HTMLParagraphElement
let counter = 0;

do {
  output2.innerHTML += `<p>the number is ${counter}` ;
  counter++;
} while (counter <= 5);