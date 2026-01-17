/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

interface StrukNaikAngkot {
    penumpang: string,
    naikDari: string,
    tujuan: string,
    bayar: number,
}

function naikAngkot(arrPenumpang: string[][]): StrukNaikAngkot[] {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    const results = [] as StrukNaikAngkot[];
    for (const [penumpang, naikDari, tujuan] of arrPenumpang) {
        results.push({
            penumpang, naikDari, tujuan,
            bayar: Math.abs(rute.indexOf(tujuan) - rute.indexOf(naikDari))*2000
        })
    }
    return results;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]