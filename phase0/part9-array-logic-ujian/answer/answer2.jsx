function mengelompokkanAngka(arr) {
  const genap = [];
  const ganjil = [];
  const kelipatan3 = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // Cek kelipatan 3 dulu (karena ini prioritas paling unik)
    if (num % 3 === 0) {
      kelipatan3.push(num);
    } 
    // Jika bukan kelipatan 3, baru cek apakah genap
    else if (num % 2 === 0) {
      genap.push(num);
    } 
    // Jika bukan keduanya, berarti ganjil
    else {
      ganjil.push(num);
    }
  }

  return [genap, ganjil, kelipatan3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// Hasil: [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]

console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
// Hasil: [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]

console.log(mengelompokkanAngka([])); // [ [], [], [] ]