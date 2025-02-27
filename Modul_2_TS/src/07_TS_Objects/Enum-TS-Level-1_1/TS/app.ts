enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
console.log(Weekday);

  // definiere month mit monaten als enum

  enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

console.log(Month);

// for in schleife um alle monate auszugeben

for (let month in Month) {
    console.log(month);
}