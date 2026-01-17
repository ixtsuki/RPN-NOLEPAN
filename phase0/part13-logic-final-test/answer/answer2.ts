/**
 * Interface untuk menentukan struktur objek hasil akhir
 */
interface StrukNaikAngkot {
    penumpang: string;
    naikDari: string;
    tujuan: string;
    bayar: number;
}

/**
 * Fungsi untuk menghitung ongkos angkot berdasarkan rute
 * @param arrPenumpang Array 2 dimensi berisi [nama, asal, tujuan]
 */
function naikAngkot(arrPenumpang: string[][]): StrukNaikAngkot[] {
    // Definisi rute tetap
    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    const hargaPerRute = 2000;
    
    // Array untuk menampung hasil akhir
    const results: StrukNaikAngkot[] = [];

    // Melakukan perulangan untuk setiap data penumpang
    for (let i = 0; i < arrPenumpang.length; i++) {
        const nama = arrPenumpang[i][0];
        const asal = arrPenumpang[i][1];
        const tujuan = arrPenumpang[i][2];

        // Mencari posisi index (urutan) lokasi di dalam array rute
        const indexAsal = rute.indexOf(asal);
        const indexTujuan = rute.indexOf(tujuan);

        // Menghitung jarak (selisih index)
        // Gunakan Math.abs agar hasilnya selalu positif meski rute terbalik
        const jarak = Math.abs(indexTujuan - indexAsal);

        // Menghitung total bayar
        const totalBayar = jarak * hargaPerRute;

        // Memasukkan objek ke dalam array hasil
        results.push({
            penumpang: nama,
            naikDari: asal,
            tujuan: tujuan,
            bayar: totalBayar
        });
    }

    return results;
}

// --- TEST CASE (Uji Coba) ---

// Contoh 1: Ada dua penumpang
console.log("Hasil Test Case 1:");
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'], 
    ['Icha', 'A', 'B']
]));

// Contoh 2: Tidak ada penumpang (Array Kosong)
console.log("\nHasil Test Case 2 (Kosong):");
console.log(naikAngkot([]));