let input = ["0001", "Izaki", "Jawir", "10/05/2004", "hobby mengetik&learning"];

function dataHandling(inputs: string[]): void {
    console.log(inputs);
    const [date, month, year] = inputs[3].split("/").map(x => parseInt(x));
    const monthString = (new Date(year, month-1, date)).toLocaleString("id", { month: "long"});
    console.log(monthString);
    console.log([year, date, month]);
    console.log(`${date}-${month}-${year}`);
    console.log(inputs[1].slice(0, 15));
}

dataHandling(input);