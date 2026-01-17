processSentence = (nama, age, address, hobby) => {
  return `hi my name is ${nama}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!"`;
};

let nama = 'Izaki';
let age = 21;
let address = 'Jln. Ngetos, Nganjuk';
let hobby = 'learning';

let fullSentence = processSentence(nama, age, address, hobby);
console.log(fullSentence); 
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"