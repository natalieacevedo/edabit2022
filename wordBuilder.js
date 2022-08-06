// In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.

function wordBuilder(letters, positions) {
  let copia = [...letters];

  for (let i = 0; i < letters.length; i++) {
    copia.splice(positions[i], 1, letters[i]);
  }
  return copia;
}

console.log(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]));
console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]));

//second solution

function myWord(letters, positions) {
  let finalArr = [];
  let finalString = "";
  letters.forEach((element, ind) => {
    finalArr.push([element, positions[ind]]);
  });

  const ordenado = finalArr.sort((a, b) => {
    const primera = a[1];
    const segunda = b[1];
    return primera - segunda;
  });

  ordenado.forEach((el) => (finalString += el[0]));
  return finalString;
}
console.log(myWord(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]));

function anotherWordBuilder(letters, positions) {
  let resultArr = [];
  for (let i = 0; i < letters.length; i++) {
    resultArr[i] = letters[positions.indexOf(i)];
  }
  return resultArr.join("");
}

console.log(
  anotherWordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2])
);

function each(letters, positions) {
  let resultArr = [];
  letters.forEach((el, indi) => {
    resultArr[indi] = letters[positions.indexOf(indi)];
  });
  return resultArr;
}
console.log(each(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]));
