function pasanganTerbesar(num) {
  // 1. Ubah angka menjadi string agar bisa diakses per digit
  const str = num.toString();
  let result = 0;

  // 2. Loop berjalan sampai digit kedua terakhir (str.length - 1)
  for (let i = 0; i < str.length - 1; i++) {
    // 3. Ambil pasangan dua angka (digit ke-i dan digit ke-i+1)
    let pasangan = parseInt(str[i] + str[i + 1]);

    // 4. Bandingkan dengan nilai 'result' saat ini, ambil yang paling besar
    if (pasangan > result) {
      result = pasangan;
    }
  }

  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573));   // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233));   // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(123456789));
console.log(pasanganTerbesar(987654321));