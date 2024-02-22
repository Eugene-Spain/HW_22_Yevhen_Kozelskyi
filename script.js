let year = 1899
while (year < 2100) {
    year++;
    if (year % 400 === 0) {
        console.log(year + " leap year")
        continue;
    } else if (year % 100 === 0) {
        continue;
    } else if (year % 4 === 0) {
        console.log(year + " leap year")
    }
}