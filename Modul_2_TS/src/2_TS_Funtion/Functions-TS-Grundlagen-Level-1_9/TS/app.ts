function aboutMe (firstName: string, lastName: string, bornIn: string, age: number, location: string) {
    let itsMe = `Ich heiße ${firstName} ${lastName} und komme aus ${bornIn}. Ich bin ${age} alt und wohne zurzeit in ${location}`;
    return itsMe;
}

let aboutMeOut: string = aboutMe("Elmin", "Hasanov", "Aserbaidschan", 37, "Oldenburg")

console.log(aboutMeOut);

