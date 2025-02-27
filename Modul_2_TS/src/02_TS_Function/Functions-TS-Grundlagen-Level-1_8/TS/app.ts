function ageCalc (birthYear: number) {
    return  2025 - birthYear;    
}

const age: number = ageCalc(1988);
console.log(age);


function ageComp (birthYear: number, birthYear2: number) {
    const birth1: number = 2025 - birthYear;
    const birth2: number = 2025 - birthYear2;
    const calcBirthDif: number = birth1 - birth2;
    return calcBirthDif;
}

const calcBirthDayDifr: number = ageComp(1988, 1989)
console.log(calcBirthDayDifr);