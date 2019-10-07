function concat(array: any[], ...overload: any): any[] {
  var i: number;
  var editedArray: any[] = [];

  for (i = 0; i < overload.length; i++) {
    if (Array.isArray(overload[i])) {
      var e: number;
      var nestedArray: any[] = [];

      for (e = 0; e < overload[i].length; e++) {
        nestedArray.push(overload[i][e]);
      }

      editedArray.push(...nestedArray);
    } else {
      editedArray.push(overload[i]);
    }
  }
  return [...array, ...editedArray];
}

// _.concat(array, [values])

var array = [1, 11];
var other = concat(array, 2, [3, 3, "a"], [[4]], undefined, null);

// console.log(other);
// => [1, 2, 3, [4]]

// console.log(array);
// => [1]
