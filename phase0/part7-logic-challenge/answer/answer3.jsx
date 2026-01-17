function hitungJumlahKata(kalimat) {
  // 1. .trim() menghapus spasi di awal dan akhir kalimat
  const trimmedKalimat = kalimat.trim();
  
  // Jika inputnya string kosong, langsung return 0
  if (trimmedKalimat === "") {
    return 0;
  }

  // 2. .split(/\s+/) membagi kalimat berdasarkan satu atau lebih spasi
  const kata = trimmedKalimat.split(/\s+/);
  
  return kata.length;
}

// TEST CASES (Nama fungsi disesuaikan menjadi hitungJumlahKata)
console.log(hitungJumlahKata('I dream of being a billionaire')); // ?
console.log(hitungJumlahKata('Never eat wheat cereal or cookies/fast food')); // ?
console.log(hitungJumlahKata('A song to sing if English songs are translated and learned')); // ?
console.log(hitungJumlahKata('Introverts and extroverts dont matter when it comes to the stomach')); // ?
console.log(hitungJumlahKata('I believe I can learn on my own')); // ?