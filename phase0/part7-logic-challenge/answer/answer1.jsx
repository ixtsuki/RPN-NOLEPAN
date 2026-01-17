function palindrome(kata) {
  //Proses membalikkan kata
  let kataTerbalik = kata.split("").reverse().join("");
  
  //Membandingkan kata asli dengan kata yang sudah dibalik
  return kata === kataTerbalik;
}

// TEST(Contoh Uji Coba)
console.log(palindrome('katak'));       
console.log(palindrome('branch'));     // Hasil: false (Karena dibalik jadi teknal hcnarb)
console.log(palindrome('porsche'));     
console.log(palindrome('kasur rusak')); // Hasil: true (Jika dibaca terbalik tetap sama)
console.log(palindrome('rumah'));
console.log(palindrome('kue'));
console.log(palindrome('juju'));
console.log(palindrome('itu'));
console.log(palindrome('rraarr'));
console.log(palindrome('rust tsur'));
console.log(palindrome('civic'));