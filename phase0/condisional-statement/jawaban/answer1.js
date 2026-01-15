// 1. Inisialisasi Variabel
const nama = "MONSTER";
const peran = "Penyihir";

/**
 * Fungsi untuk menjalankan logika Game Proxytia
 * @param {string} name - Nama pemain
 * @param {string} role - Peran yang dipilih
 */
function startProxytia(name, role) {
    // Validasi Nama: Wajib diisi
    if (!name || name === "") {
        return "Nama wajib diisi";
    }

    // Validasi Peran: Wajib diisi
    if (!role || role === "") {
        return "Pilih Peranmu untuk memulai game";
    }

    // Pengecekan Peran menggunakan Switch Case
    switch (role) {
        case "Ksatria":
            return `Halo Ksatria ${name}, kamu dapat menyerang dengan senjatamu!`;
        case "Tabib":
            return `Halo Tabib ${name}, kamu akan membantu temanmu yang terluka`;
        case "Penyihir":
            return `Halo Penyihir ${name}, ciptakan keajaiban yang membantu kemenanganmu!`;
        default:
            return `Halo ${name}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`;
    }
}

// 2. Output: Memanggil fungsi dan mencetaknya di console
console.log(startProxytia(nama, peran));