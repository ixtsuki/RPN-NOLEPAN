//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr: number[]): boolean {
    let gap = 0;
    for (let i = 0; i < arr.length-1; i++) {
        const newGap = arr[i+1] - arr[i];
        if (i > 0 && gap !== newGap) return false;
        gap = newGap;
    }
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false