/*
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
*/

/*
array:
[ [ 5 ], [ [ ] ] ]
  outputs => 2
array:
[ 10, 20, 30, 40 ]
  outputs => 1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]
  outputs => 4
array:
[ ]
  outputs => 0
array:
[ [ [ ] ] ]
  outputs => 0
*/

// Given code
function arrayception(array) {

}




// Answer
function arrayception(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i].length === 0) {
          total = 0;
      }
      else if (Array.isArray(array[i])) {
          total = arrayception(array[i]);
          if (total > 0) {
              total += 1;
          }
      }
      else {
          total = 1;
      }
      if (total > count) {
          count = total;
      }
  }
  return count;
}
