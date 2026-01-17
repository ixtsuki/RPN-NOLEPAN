function dataHandling(inputs: string[][]): string {
    return inputs
        .map(([id, namaLengkap, tmpt, tgl, hobi]) => [
            `Nomor ID     : ${id}`,
            `Nama Lengkap : ${namaLengkap}`,
            `TTL          : ${tmpt}, ${tgl}`,
            `Hobi         : ${hobi}`,
        ].join("\n"))
        .join("\n\n");
}

let input = [
    ["0001", "Rams", "Bali", "21/05/1989", "Analytics"],
    ["0002", "Oki", "Bali", "10/10/1992", "Bermain kucing"],
    ["0003", "Harkon", "Jacarta", "25/12/1965", "Suka Ngoding"],
    ["0004", "Zexo", "Jacarta", "6/4/1970", "Suka Ngoding"]
];

console.log(dataHandling(input));
function dataHandling(inputs: string[][]): string {
    return inputs
        .map(([id, namaLengkap, tmpt, tgl, hobi]) => [
            `Nomor ID     : ${id}`,
            `Nama Lengkap : ${namaLengkap}`,
            `TTL          : ${tmpt}, ${tgl}`,
            `Hobi         : ${hobi}`,
        ].join("\n"))
        .join("\n\n");
}

let input = [
    ["0001", "Rams", "Bali", "21/05/1989", "Analytics"],
    ["0002", "Oki", "Bali", "10/10/1992", "Bermain kucing"],
    ["0003", "Harkon", "Jacarta", "25/12/1965", "Suka Ngoding"],
    ["0004", "Zexo", "Jacarta", "6/4/1970", "Suka Ngoding"]
];

console.log(dataHandling(input));
