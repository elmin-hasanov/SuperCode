let date1 = new Date();
let date2 = new Date();
let date3 = new Date();
let date4 = new Date();


date1.setFullYear(2077)
date2.setHours(30);
date2.setDate(30);
date2.setFullYear(2075);
date3.setHours(220);
date3.setDate(1000);
date3.setFullYear(2054);
date4.setDate(30);


console.log(date1), document.getElementById("date1").innerHTML = date1;

console.log(date2), document.getElementById("date2").innerHTML = date2;

console.log(date3), document.getElementById("date3").innerHTML = date3;

console.log(date4), document.getElementById("date4").innerHTML = date4;
