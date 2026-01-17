function ubahHuruf(kata) {
  let hasil = "";

  for (let i = 0; i < kata.length; i++) {
    // 1. Ambil kode angka (ASCII) dari huruf saat ini
    let kodeASCII = kata.charCodeAt(i);

    // 2. Tambahkan 1 agar maju ke huruf berikutnya
    let kodeBaru = kodeASCII + 1;

    // 3. Ubah kembali angka tersebut menjadi huruf
    let hurufBaru = String.fromCharCode(kodeBaru);

    // 4. Gabungkan ke dalam variabel hasil
    hasil += hurufBaru;
  }

  return hasil;
}

// TEST CASES
console.log(ubahHuruf('izaki'));      // jabl j
console.log(ubahHuruf('developer'));  // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren'));      // lfsfo
console.log(ubahHuruf('semangat'));   // tfnbohbu

function ubahHuruf(kata) {
  let hasil = "";
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === 'z') {
      hasil += 'a'; // Jika 'z', paksa jadi 'a'
    } else {
      hasil += String.fromCharCode(kata.charCodeAt(i) + 1);
    }
  }
  return hasil;
}