/**
 * Fungsi Deep Sum menggunakan TypeScript
 * @param arr Bisa berupa angka tunggal, array angka, atau array bersarang (nested)
 * @returns number (hasil jumlah) atau string (jika kosong)
 */

// Kita definisikan tipe data kustom agar bisa menerima array bersarang sedalam apapun
type DeepArray = number | DeepArray[];

function deepSum(arr: DeepArray[]): number | string {
  // 1. Jika array kosong di lapisan teratas, kembalikan "No number"
  if (arr.length === 0) {
    return "No number";
  }

  let total = 0;
  let foundNumber = false;

  // Fungsi pembantu (helper) untuk melakukan rekursi secara mendalam
  function calculate(innerArr: DeepArray[]): void {
    for (const item of innerArr) {
      if (Array.isArray(item)) {
        // Jika ketemu array lagi, gali lebih dalam (Rekursi)
        calculate(item);
      } else if (typeof item === "number") {
        // Jika ketemu angka, tambahkan ke total
        total += item;
        foundNumber = true;
      }
    }
  }

  calculate(arr);

  // 2. Jika setelah dicari tetap tidak ada angka, return "No number"
  return foundNumber ? total : "No number";
}

// --- TEST CASES ---

const case1: DeepArray[] = [
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
];
console.log(deepSum(case1)); // Output: 316

const case2: DeepArray[] = [
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
];
console.log(deepSum(case2)); // Output: 156

console.log(deepSum([])); // Output: "No number"