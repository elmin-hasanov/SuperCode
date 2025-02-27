type Apple = {
    color: string;
    size: string;
    isSweet?: boolean;
  };
  
  const redApple: Apple = { color: 'red', size: 'big', isSweet: true };
  const greenApple: Apple = { color: 'green', size: 'small', isSweet: true };
  const yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: false };

  const apples: Apple[] = [redApple, greenApple, yellowApple];

// alle Größen der Äpfel ausgeben
for (const apple of apples) {
    console.log(apple.size);
  }

// alle Farben der Äpfel ausgeben
apples.forEach(element => {
    console.log(element.color);
});

// lenge anzahlen der Äpfel ausgeben
console.log(apples.length);

// object pinkApple erstellen type Apple
const pinkApple: Apple = { color: 'pink', size: 'small' };

// pinkApple in apples hinzufügen
apples.push(pinkApple);

// alle Äpfel ausgeben
console.log(apples);

