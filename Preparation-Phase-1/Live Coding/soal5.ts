function piramid2(num: number) {
  const str = [] as string[];
  for (let i = 1; i <= num; i++) {
    str.unshift(`${i}`.padStart(i, `${i}`));
    if (i > 1) str.push(`${i}`.padStart(i, `${i}`));
  }
  return str.join("\n");
}

console.log(piramid2(10))

/*
55555
4444
333
22
1
22
333
4444
55555
*/
