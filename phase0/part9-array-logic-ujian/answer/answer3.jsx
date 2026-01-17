function groupAnimals(animals) {
  // 1. Urutkan dulu hewannya sesuai abjad (A-Z)
  animals.sort();

  // 2. Siapkan wadah besar untuk menampung semua kelompok
  const hasil = [];
  
  // 3. Jika array kosong, langsung kembalikan array kosong
  if (animals.length === 0) return hasil;

  // 4. Mulai kelompok pertama dengan hewan pertama
  let grupSekarang = [animals[0]];

  for (let i = 1; i < animals.length; i++) {
    // Ambil huruf depan hewan sekarang dan hewan sebelumnya
    let hurufDepanSekarang = animals[i][0];
    let hurufDepanSebelumnya = animals[i - 1][0];

    // Jika huruf depannya sama, masukkan ke grup yang sama
    if (hurufDepanSekarang === hurufDepanSebelumnya) {
      grupSekarang.push(animals[i]);
    } else {
      // Jika beda, tutup grup lama, masukkan ke hasil, lalu buat grup baru
      hasil.push(grupSekarang);
      grupSekarang = [animals[i]];
    }
  }

  // Masukkan grup terakhir ke dalam hasil
  hasil.push(grupSekarang);

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['anoa', 'ayam'], ['cacing', 'cicak'], ['kancil', 'kuda'], ['unta'] ]