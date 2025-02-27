const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//arrow methode gerade zahlen
const geradeZahlen = zahlen.filter(zahl => zahl % 2 == 0)

console.log(geradeZahlen);


// ungekürtzt 
function istGerade(zahl: number) {
    return zahl % 2 === 0;
}

const geradeZahlen2 = zahlen.filter(istGerade);

console.log(geradeZahlen2);


// ungerade zahlen

const ungeradeZahlen = zahlen.filter(zahl => zahl % 2 == 1)

console.log(ungeradeZahlen);
