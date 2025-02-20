const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdam"]

console.log(bucketList);
console.log(bucketList.length);


// Fügt wie push nur am anfang

const addStart = bucketList.unshift("Baku", "Berlin", "Barcelona");

console.log(bucketList);

console.log("Neues wort hizugefügt am anfang : ", addStart);

console.log(bucketList.length);