function caps(sentence) {
  if (sentence === sentence.toUpperCase()) {
    return sentence.toLowerCase() + "!";
  } else {
    return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
  }
}

//console.log(caps("CAPs Lock dYanm is Over"));

function capsDos(sentence) {
  return sentence
    .split(" ")
    .map((el, ind) =>
      ind === 0
        ? el[0].toUpperCase() + el.slice(1).toLowerCase()
        : el.toLowerCase()
    )
    .join(" ");
}

console.log(capsDos("CAPs LockYsTEsf dYanm is Over"));
