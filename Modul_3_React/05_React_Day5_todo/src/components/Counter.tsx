import { useState } from "react"

// exkurs destructuring bei arrays
// const arr = [1,2,3,4,5]
// const [a,b,c] = arr // a sollte jetzt 1 sein, b 2 und c 3. 
// console.log(a,b,c)



// const array: (number | string)[] = [1,"a"]
// const ersterWertAusDemArray = array[0]
// const [c,d] = array

// const tuple: [number, string] = [1,"a"]
// const [a, b] = tuple



function Counter() {

  // ! änderungen normal initialisierter variablen lösen kein rerendering aus
  // ! => wenn wir count inkrementieren würden, würde React nicht wissen dass es auch die UI updaten soll
  // let count = 0
  
  // * useState gibt ein Tupel zurück: der erste Eintrag enthält den Wert der
  // * zweite eine Setter-Funktion mit der wir den Wert updaten können
  // const count = useState(0)
  // const countValue = count[0]
  // const countSetter = count[1]
  const [count, setCount] = useState(0)


  const handleClick = ()=>{
    console.log("Ich wurde geklickt")
    // setCount updated count und loest rerendering (also neue Ausführung der Komponente) aus
    console.log(count)
    // setCount(count+1)
    console.log(count)
    // * Alternative Verwendungsmoeglichkeit von setState
    // * Wichtig wenn der neue Wert vom alten Wert abhängt
    setCount((oldCount)=>(oldCount + 1))
  }
  // count === 0
  // setCount(1) 
  // setCount(1) 
  // setCount(1) 
  // setCount(1) 
  // setCount(1) 

  // count === 0 
  // setCount((0)=>(0 + 1)) => 1
  // setCount((1)=>(1 + 1)) => 2
  // setCount((2)=>(oldCount + 1))
  // setCount((oldCount)=>(oldCount + 1))
  // setCount((oldCount)=>(oldCount + 1))







  return (
    <div>
      <button onClick={handleClick}>Current Count: {count}</button>
    </div>
  )
}


export default Counter
