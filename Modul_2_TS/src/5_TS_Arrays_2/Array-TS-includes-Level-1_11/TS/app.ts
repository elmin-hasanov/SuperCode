let string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string.includes("Piper"));

console.log(string.includes("piper"));

console.log(string.toLowerCase().includes("piper".toLowerCase()));

console.log(string.includes("peck", 20));

console.log(string.includes("peck", 30));
