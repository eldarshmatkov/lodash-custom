function compact(array: any[]): any[] {
  var i: number;
  var editedArray: any[] = [];

  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      editedArray.push(array[i]);
    }
  }
  return editedArray;
}

// console.log(compact([0, 1, false, 2, "", 3, null, undefined, NaN]));
// => [1, 2, 3]
