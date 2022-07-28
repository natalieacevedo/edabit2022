PARTIALLY HIDDEN STRING
Create a function that takes a phrase and transforms each word using the following rules:

* Keep first and last character the same.
* Transform middle characters into a dash

FIRST SOLUTION:

function hiddenString(phrase) {
  const arr = phrase.split(" ");
  let finalString = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i] <= 2) {
        finalString += arr[i];
      } else {
        if (j === 0) {
          finalString += arr[i][j];
        } else if (j === arr[i].length - 1) {
          finalString += arr[i][j] + " ";
        } else {
          finalString += "-";
        }
      }
    }
  }
  return finalString;
}

//SECOND SOLUTION:

function hiddenString(phrase) {
  return phrase
    .split(" ")
    .map((word) => {
      if (word.length <= 2) {
        return word;
      } else {
        let toReplace = word.slice(1, word.length - 1);

        let guiones = "-".repeat(toReplace.length);

        return word.replace(toReplace, guiones);
      }
    })
    .join(" ");
}

console.log(hiddenString("Harry went soul fo to fight the basilisk"));
