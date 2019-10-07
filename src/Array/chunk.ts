function chunk(array: string[], decimal: number): any[] {
  var i: number;
  var wrapperArray: string[][] = [];
  var particleArray: string[] = [];

  for (i = 0; i < array.length; i++) {
    particleArray.push(array[i]);

    if ((i + 1) % decimal === 0) {
      wrapperArray.push(particleArray);
      particleArray = [];
    }
    if (i + 1 === array.length) {
      if (particleArray.length > 0) {
        wrapperArray.push(particleArray);
      }
    }
  }
  return wrapperArray;
}

// console.log(chunk(["a", "b", "c", "d", "e", "f", "g"], 7), "chunk");
// => [['a', 'b'], ['c', 'd']...]
