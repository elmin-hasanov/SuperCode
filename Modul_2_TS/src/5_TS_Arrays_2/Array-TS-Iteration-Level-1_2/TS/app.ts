const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const output = document.getElementById("output")

const upperDrinks = drinks.map(a => a.toUpperCase())

console.log(upperDrinks);

function constoutput(){
    if (output) {
    output.innerHTML = `<p>${upperDrinks}<p>`
    } 
}

constoutput()


// 

const numbers = ["Gurke", "Tomate", "Zwiebel", "Knoblauch"];
const newArr = numbers.map(myFunction)

function myFunction(num: string) {
  return num + " 5 Stück ";
}

console.log(newArr);
