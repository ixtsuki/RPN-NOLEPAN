
function bandingkanAngka(angka1: number, angka2: number): boolean | -1 {
    if (angka1 === angka2) return -1;
    return angka2 > angka1
  }
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
  
  
  // ------------------------------------
  console.log('')
  // ------------------------------------
  
  // Problem
  // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
  // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
  
  function balikKata(kata: string): string {
      return kata.split("").reverse().join("");
  }
    
    // TEST CASES
    console.log(balikKata('Hello World and Builder')); // sredoC dna dlroW olleH
    console.log(balikKata('izaki')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby and learn')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS
  
  // ------------------------------------
  console.log('')