// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/*
Langkah awal
kita cek variable nama agar tidak kosong
jika nama tidak dimasukan maka akan ada peringatan error

setelah itu
kita cek variable peran, apakah isi variable peran ada didalam map PERANS
jika tidak, keluarkan pesan default
jika iya, keluarkan pesan sesuai kriteria

*/

let nama = "MONSTER", peran = "Penyihir";

//code disini gunakan console.log untuk outputnya
interface Peran {
    nama: string,
    pesan: string,
}

const PERANS: Map<string, string> = new Map([
    ["Ksatria", "kamu dapat menyerang dengan senjata mu!"],
    ["Tabib", "kamu akan membantu temanmu yang terluka!"],
    ["Penyihir", "ciptakan keajaiban yang membantu kemenanganmu!"],
    ["default", "tapi kayaknya kamu jdi bot aja ya, peran yang kamu pilih gak ada!"],
]);

function run(nama: string, peran: string = "default"): string {
    if (nama.length < 1) return "masukan nama setidaknya 1 character";
    const pesan = PERANS.get(peran) || PERANS.get("default")!;
    return `Hai ${nama}, ${pesan}`;
}

console.log(run(nama, peran));