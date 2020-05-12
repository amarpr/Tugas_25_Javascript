function tugas() {
    let numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : " + numbers);

    let asc = "Ascending : " + numbers.sort();
    console.log(asc);

    let desc = "Descending : " + numbers.reverse();
    console.log(desc);

    let fil = numbers.filter(number => {
        return number > 10;
    });

    console.log("Filter > 10 : " + fil);

}

tugas()