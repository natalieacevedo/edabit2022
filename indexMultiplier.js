// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function IndexMultiplier(arr) {
  let subArrays = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      subArrays.push([arr[i], i]);
    }
    return subArrays.reduce((acc, el) => acc + el[0] * el[1], 0);
  } else {
    return 0;
  }
}

console.log(IndexMultiplier([1, 2, 3, 4, 5]));

//SECOND SOLUTION

function solutionF(arr) {
  return arr.reduce((acc, n, i) => acc + n * i, 0);
}
console.log(solutionF([1, 2, 3, 4, 5]));

//THIRD SOLUTION

function thirdSolution(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * i;
    console.log(i);
  }
  return total;
}

console.log(thirdSolution([1, 2, 3, 4, 5]));
