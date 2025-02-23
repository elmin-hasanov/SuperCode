// Array liste
const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(languages.sort);


// Array kopiert über ...
const copyLang = [...languages]

// Array sortiert über .sort ((a, z) => a.localCompare(z)))
// mit a z kann man beliebig bennen localCompare sortiert es nach Alphabet
console.log(copyLang.sort((a, z) => a.localeCompare(z)));


// 
// 
// 


const euCountry: string[] = ["France", "Germany", "Sweden", "Great", "Britain", "Czech", "Republic", "Switzerland"]

console.log(euCountry);


// hier füge Kopiere ich Array und füge noch eine wert hinzu ohne den Array zu verändern

const copyEuCountry = [...euCountry, "Azerbaijan"]

// hier loge ich es aus und sortiere es nach Alphabet
console.log(copyEuCountry.sort((a, z) => a.localeCompare(z)));

// hier ist das Array die unverändert ist
console.log(euCountry.sort((a, z) => a.localeCompare(z)));
