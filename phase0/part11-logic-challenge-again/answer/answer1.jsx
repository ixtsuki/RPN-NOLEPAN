function digitPerkalianMinimum(angka) {
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= angka; i++) {
        if (angka % i !== 0) continue;
        result = Math.min(result, `${i}${angka/i}`.length);
    }
    return result;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2