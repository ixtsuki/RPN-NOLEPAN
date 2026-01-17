//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str: string): string {
    const results = str.split("").map(x => x.charCodeAt(0));
    for (let ii = 0; ii < results.length; ii++) {
        for (let i = 0; i < results.length - 1; i++) {
            if (results[i] > results[i+1]) {
                const v = results[i];
                results[i] = results[i+1];
                results[i+1] = v;
            }
        }
    }
    return results.map(x => String.fromCharCode(x)).join("");
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'