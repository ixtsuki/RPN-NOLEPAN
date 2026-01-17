//cari faktor persekutuan terbesar
function fpb(angka1: number, angka2: number): number {
    let angkaTerbesar = Math.max(angka1, angka2);
    let angkaTerkecil = Math.min(angka1,angka2);
    while (angkaTerkecil > 0) {
        const res = angkaTerbesar / angkaTerkecil;
        const floor = Math.floor(res);
        const sisa = Math.round((res - floor) * angkaTerkecil);
        angkaTerbesar = angkaTerkecil;
        angkaTerkecil = sisa;
    }
    return angkaTerbesar;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1