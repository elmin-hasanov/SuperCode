const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdam"]

console.log(bucketList);
console.log(bucketList.length);


// Fügt wie push nur am anfang

const addStart = bucketList.unshift("Baku", "Berlin", "Barcelona");

console.log(bucketList);

console.log("Neues wort hizugefügt am anfang : ", addStart);

console.log(bucketList.length);

//
console.log('%c Slice!!! ', 'background: red; color: #fff'); 
//

const cutting = bucketList.slice(1, 3)


console.log("Von der liste wurde Berlin und Barcelan geschnitten 1 'Zwischen' 3 ", cutting);

console.log("Liste wurde nicht verändert durch slicen", bucketList);


