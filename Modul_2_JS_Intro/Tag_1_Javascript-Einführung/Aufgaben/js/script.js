
// ! Variablen-Level-1_5


// let carName = "BMW";
// console.log(carName);

// let x = 150;
// console.log(x);

// let y = 50;
// console.log(y);

// let z = x + y;

// console.log(z);


// let firstName;
// let lastName; 
// let age;

// firstName = "Elmin"; 
// lastName = "Hasanov";
// age = 36;

// console.log(firstName, lastName, age);


// ! Variablen-Level-1_6


// let x = 34;

// x = 67;

// console.log(x);
// console.log('%c Hier kann ich den wert änder weil let ein variable die man ändern kann! ', 'background: red; color: #fff');

// const y = 34;

// y = 67;

// console.log(y);

// console.log('%c Variable kann nicht gändert werden da es ein const ist! ', 'background: red; color: #fff');


// ! Intro-Level-1_8 (Variablen, arithmetische Operatoren)


// let x = 20;
// let y = 30;

// console.log(x + y);

// console.log(y - x);

// console.log(x - y);

// console.log(x * y);

// console.log(x / y);

// let z = 10;

// console.log(x * y / z);

// let resultOne = x * y / z;

// let a = 15;
// let b = 9;

// console.log(a % b);

// let c = 20;

// let resultTwo = (a + b) * c;

// console.log(resultTwo);

// console.log(++a);
// console.log(--b);

// let resultThree = a - b;

// console.log(resultThree);

// console.log(resultOne % resultTwo);


//  ! Intro-Level-1_12 (arithmetische Operatoren)


// let score = 5 + 5 * 10;
// console.log('Ergebnis: '+ score);

// score = (5 + 5) * 10;
// console.log('Ergebnis: '+ score);

// score = 0;
// score = score + 10;
// console.log('Ergebnis: '+ score);

// let zahl = 1;
// zahl = zahl + 1;
// zahl += 1;

// zahl++;

// console.log('increment:' +zahl);

// zahl--;

// console.log('dekrement:' +zahl);


// ! Number-Methods-Level-1_2


// let num = 15.16698;

// let n = num.toFixed(2);

// console.log(n);


// let num2 = 7.787114;

// let n2 = num2.toFixed(2);

// console.log(n2);


// let num3 = "12.3";

// console.log(num3);
// console.log(Number(num3));


// let result = true;

// let result2 = false;

// let string = "321";

// let string2 = "Supercode";


// ! String-Methods-Level-1_1 (length)


// let firstName = "Elmin";

// let lastName = "Hasanov";

// console.log(firstName .length )

// console.log(lastName .length )

// let fullName = 12;

// console.log(fullName)


// ! String-Methods-Level-1_2 (indexOf)


// const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.'

// console.log(txt.indexOf('h'));

// console.log(txt.indexOf('Earth'));

// console.log(txt.indexOf('Moon'));


// ! String-Methods-Level-1_4 (slice())


// Susi
// is
// is going to school
// school
// Susi is school


// const A = 'Susi is going to codingschool'

// console.log(A.slice(0, 4));

// console.log(A.slice(5, 7));

// console.log(A.slice(5, 17) + A.slice(-6));

// console.log(A.slice(-6))

// console.log(A.slice(0, 8) + A.slice(-6))


// ! String-Methods-Level-1_5 (substring())


// const susiIstDoof = 'Susi is back from codingschool'

// const susi = susiIstDoof.substring (0, 4)
// console.log(susi);

// const is = susiIstDoof.substring (5, 7)
// console.log(is)

// const school = susiIstDoof.substring (24)
// console.log(school);

// const susiIsSchool = susiIstDoof.substring (0, 8) + susiIstDoof.substring (24)
// console.log(susiIsSchool);


// ! String-Methods-Level-1_7 (replace())


// const samIstDoof = 'Sam is good at codingschool'

// const sam1 = samIstDoof.replace("good", "bad").replace("codingschool", "school")

// console.log(sam1);

// const susi = samIstDoof.replace("Sam", "Susi").replace("codingschool", "school")

// console.log(susi);

// const sam3 = samIstDoof.replace("codingschool", "tennis")

// console.log(sam3);


// ! String-Methods-Level-1_8 (toUpperCase(), toLowerCase())


// const text = "Sam is going to codingschool"

// const sam = text.slice(0, 4) .toUpperCase();

// const sam2 = text.slice(0, 4);

// const is = text.slice(4, 7) .toUpperCase();

// const is2 = text.slice(4, 5) .toUpperCase() + text.slice(5, 7) .toLowerCase();

// const going = text.slice(7, 14) .toUpperCase();

// const going2 = text.slice(7, 8) .toUpperCase() + text.slice(8, 14) .toLowerCase(); 

// const to = text.slice(14, 16) .toUpperCase();

// const to2 = text.slice(14, 15) .toUpperCase() + text.slice(15, 16).toUpperCase();

// const school = text.slice(-6) .toUpperCase();

// const result1 = sam + is + going + to + school

// console.log(result1);

// const result2 = sam.toLowerCase() + is.toLowerCase() + going.toLowerCase() + to.toLowerCase() + school.toLowerCase(); 

// console.log(result2);

// const result3 = sam + is.toLowerCase() + going.toLowerCase() + to.toLowerCase() + school

// console.log(result3);

// const result4 = sam2 + is + going + to + school.toUpperCase();

// console.log(result4);

// const result5 = sam2 + is2 + going2 + to2 + school;

// console.log(result5)


// ! Template-Literals-ES6-Level-1_1


// let vorname = "Elmin";
// let nachname = "Hasanov";
// let alter = "36";
// let grösse = "175 m";
// let gewicht = "83 KG";
// let hobby = "Sport";

// let computerspiel = "StarWars";
// let lieblingsessen = "Pasta";
// let lieblingsjahreszeit = "Winter =)";
// let lieblingsurlaubsort = "Spanien (Barcelona).";


// let text1 = "Ich heiße " + vorname + " " + nachname + " ich bin " + alter + " jahre alt, " + grösse + " Groß und wiege " + gewicht + ".";

// console.log(text1);

// let text2 = `Mein Lieblingscomputerspiel ist ${computerspiel}. Mein lieblingsessen ist ${lieblingsessen}. Lieblingsjahreszeit ist ${lieblingsjahreszeit} und Lieblingsurlaubsort ist ${lieblingsurlaubsort}`;


// console.log(text2);

// document.getElementById("text1").textContent = text1;
// document.getElementById("text2").textContent = text2;