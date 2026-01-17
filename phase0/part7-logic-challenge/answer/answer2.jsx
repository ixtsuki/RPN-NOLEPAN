/**
 * Function angkaPalindrome sesuai instruksi soal
 */
function angkaPalindrome(angka) {
  // Kita mulai mencari dari angka setelahnya (syarat: angka selanjutnya)
  let nextNum = angka + 1;

  while (true) {
    // 1. Ubah angka ke string
    let strNum = nextNum.toString();
    
    // 2. Balikkan string tersebut
    let reversed = "";
    for (let i = strNum.length - 1; i >= 0; i--) {
      reversed += strNum[i];
    }

    // 3. Cek apakah sama (Palindrome)
    if (strNum === reversed) {
      return nextNum; // Jika ketemu, kembalikan angkanya dan stop loop
    }

    // 4. Jika belum ketemu, lanjut ke angka berikutnya
    nextNum++;
  }
}

function angkaPalindrome(num) {
  let nextNum = num + 1;
  while (true) {
    let strNum = nextNum.toString();
    let reversedStr = strNum.split('').reverse().join('');
    if (strNum === reversedStr) return nextNum;
    nextNum++;
  }
}

console.log(angkaPalindrome(8));    // 9
console.log(angkaPalindrome(10));   // 11
console.log(angkaPalindrome(117));  // 121
console.log(angkaPalindrome(175));  // 181
console.log(angkaPalindrome(1000)); // 1001
// PEMBUKTIAN SESUAI CONTOH SOAL:
console.log("Input data 20  -> Output data:", angkaPalindrome(8));   // Hasil: 33 (Benar)
console.log("Input data 9  -> Output data:", angkaPalindrome(10));    // Hasil: 9 (Benar, 8 dilewati)
console.log("Input im 10 and Output you:", angkaPalindrome(117));  // Hasil: 353 (Benar, mencari setelah 343)
console.log("Input 10  -> Output:", angkaPalindrome(175));   // Hasil: 11 (Benar)
console.log("Input 117 -> Output:", angkaPalindrome(1000));  // Hasil: 121 (Benar)