function targetTerdekat(arr) {
  let indexO = -1;
  let indexX = [];

  // 1. Cari tahu di mana posisi 'o' dan semua posisi 'x'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'toko o') {
      indexO = i;
    } else if (arr[i] === 'toko x') {
      indexX.push(i);
    }
  }

  // 2. Jika tidak ada 'o' atau tidak ada 'x', jaraknya adalah 0
  if (indexO === -1 || indexX.length === 0) {
    return 0;
  }

  // 3. Cari jarak terpendek
  let jarakTerdekat = arr.length; // Angka awal bebas yang besar

  for (let i = 0; i < indexX.length; i++) {
    let selisih = Math.abs(indexO - indexX[i]); // Math.abs agar hasilnya selalu positif
    if (selisih < jarakTerdekat) {
      jarakTerdekat = selisih;
    }
  }

  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'toko o', ' ', ' ', 'toko x', ' ', 'toko x'])); // 3
console.log(targetTerdekat(['toko o', ' ', ' ', ' ', 'toko x', 'toko x', 'toko x'])); // 4
console.log(targetTerdekat(['toko x', ' ', ' ', ' ', 'toko x', 'toko x', 'toko o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'toko o', ' '])); // 0
console.log(targetTerdekat([' ', 'toko o', ' ', 'toko x', 'toko x', ' ', ' ', 'toko x'])); // 2