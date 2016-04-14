/*
Given an array of negative/positive integers, find the largest element. DO NOT use Math.max
*/

/*
numbers:
[ 20, 30, 10 ]
  outputs => 30
numbers:
[ 5 ]
  outputs => 5
*/

// Given code
function max (numbers) {

}

// Answer
function max (numbers) {
  return numbers.reduce(function(first, next) {
    return first < next ? next : first;
  })
}
