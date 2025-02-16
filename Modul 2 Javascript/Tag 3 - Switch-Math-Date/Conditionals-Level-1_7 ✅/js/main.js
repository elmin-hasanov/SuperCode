let weekdayAsNumber = Number(window.prompt("Please insert a number from 1 to 7"));
let weekdayAsString;

switch (weekdayAsNumber) {
    case 1:
        weekdayAsString = "Monday";
        break;
    case 2:
        weekdayAsString = "Tuesday";
        break;
    case 3:
        weekdayAsString = "Wednesday";
        break;
    case 4:
        weekdayAsString = "Thursday";
        break;
    case 5:
        weekdayAsString = "Friday";
        break;
    case 6:
        weekdayAsString = "Saturday";
        break;
    case 7:
        weekdayAsString = "Sunday";
        break;
    default:
        weekdayAsString = "Weekday must be between 1 and 7";
        break;
}

console.log(weekdayAsString);