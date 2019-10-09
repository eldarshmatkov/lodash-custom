function dropRight(array: any[], digit: number = 1): any[] {
  var editedArray: any[] = array;
  var i: number;
  for (i = 0; i < digit; i++) {
    array.pop();
  }

  return editedArray;
}

// console.log(dropRight([1, 2, 3]));
// => [1, 2]

// console.log(dropRight([1, 2, 3], 2));
// => [1]

// console.log(dropRight([1, 2, 3], 5));
// => []

// console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]
