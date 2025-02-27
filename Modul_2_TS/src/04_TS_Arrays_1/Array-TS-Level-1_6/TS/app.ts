const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdam"]

console.log(bucketList);
console.log(bucketList.length);

const newpush = bucketList.push("Baku", "Berlin");

console.log(bucketList);
console.log(newpush);


const removeStart = bucketList.shift();
console.log(bucketList);
console.log("Das wurde entfert von anfang", removeStart);
console.log(bucketList.length);