function drop(array: any[], digit: number = 1): any[] {
  var editedArray: any[] = array;
  var i: number;
  for (i = 0; i < digit; i++) {
    array.shift();
  }

  return editedArray;
}

// console.log(drop([1, 2, 3]));
// => [2, 3]

// console.log(drop([1, 2, 3], 2));
// => [3]

// console.log(drop([1, 2, 3], 5));
// => []

// console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]
