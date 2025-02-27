const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

// Aufsteigend sortierung 
  numArray1.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  console.log(numArray1);
// absteigende sortierung 
  numArray1.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  console.log(numArray1);
  
  // oder mit reverse umdrehen die sortierung
  console.log(numArray1.reverse());
  
  // kurze schreibweise

  numArray1.sort(function(a, b) {
    return a - b;
  })

  console.log(numArray1);
  

  // noch kürzer mit arrow
  numArray1.sort((a, b) => b - a)

  console.log(numArray1);



  console.table(numArray1);
