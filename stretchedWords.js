// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

function stretchWords(word) {
  let finalString = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] != word[i + 1]) {
      finalString += word[i];
    } else {
      continue;
    }
  }

  return finalString;
}

console.log(stretchWords("wiiiinnnnd"));

//SECOND SOLUTION:

function stretchWordsTwo(word) {
  return [...new Set([...word])].join("");
}

console.log(stretchWordsTwo("naaattaaliees"));
