function deepEqual(x: object, y: object): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    : x === y;
}

function difference(array: any[], compareTo: any[]): any[] {
  var editedArray: any[] = [];
  var i: number;

  for (i = 0; i < array.length; i++) {
    var e: number;
    var sameness: boolean = false;

    for (e = 0; e < compareTo.length; e++) {
      //check if both items are objects
      if (typeof array[i] === "object" && typeof compareTo[e] === "object") {
        //check deep equality of objects
        if (deepEqual(array[i], compareTo[e])) {
          sameness = true;
          break;
        } else {
        }
      } else {
        // check if they are equal in some sort
        if (array[i] === compareTo[e]) {
          sameness = true;
          break;
        } else {
          continue;
        }
      }
    }

    if (sameness !== true) {
      editedArray.push(array[i]);
    }
  }

  return editedArray;
}
var result = difference(
  [2, 1, 4, "b", "match", { a: { a: [1, 2] } }],
  [2, "match", 3, 5, "a", false, { a: { a: [1, 3] } }]
);
// console.log(result);
// => [1, 4, "b", null]
