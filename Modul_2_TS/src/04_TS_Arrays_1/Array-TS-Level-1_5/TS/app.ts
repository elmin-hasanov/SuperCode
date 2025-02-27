const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdam"]

console.log(bucketList);
console.log(bucketList.length);

const newpush = bucketList.push("Baku", "Berlin");

console.log(bucketList);
console.log(newpush);


const removeEnd = bucketList.pop();
console.log(bucketList);
console.log("Das wurde entfert von ende", removeEnd);
console.log(bucketList.length);


