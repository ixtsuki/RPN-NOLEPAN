/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals: string[]): string[][] {
    animals.sort();
    const groups: string[][] = [];
    let firstWord = animals[0].charAt(0);
    let group: string[] = [];
    for (const animal of animals) {
        if (animal.charAt(0) !== firstWord) {
            firstWord = animal.charAt(0);
            groups.push(group);
            group = [];
        }
        group.push(animal);
    }
    groups.push(group);
    return groups;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'naga', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'naga', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]