function numberToReversedArray(number) {
  const toArr = Array.from(String(number));
  let finalArr = [];
  for (let i = toArr.length - 1; i >= 0; i--) {
    finalArr.push(parseInt(toArr[i]));
  }
  return finalArr;
}

console.log(numberToReversedArray(1485979));

const SecondSolution = (number) => {
  const toArr = Array.from(String(number));
  let finalArr = [];

  toArr.forEach((el, ind, arr) => {
    finalArr.push(parseInt(arr[arr.length - 1 - ind]));
  });
  return finalArr;
};

console.log(SecondSolution(623478));
