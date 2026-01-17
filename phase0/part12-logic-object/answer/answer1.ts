interface ChangedMe {
    lastName: string,
    gender: string,
    age: number | string,
}

function changeMe(arr: (string | number)[][]): void {
    const yearNow = 2023; // (new Date).getFullYear();
    const results: ChangedMe[] = [];
    for (const [name, lastName, gender, yborn] of arr) {
        const vl: ChangedMe = {
            lastName: lastName as string,
            gender: gender as string,
            age: typeof yborn === "number" ? yearNow - (yborn as number) : "Invalid Birth Year"
        };
        results.push(vl);
    }
    console.log(results);
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""