function hamming(phraseOne, phraseTwo) {
  let phraseOneClear = phraseOne.replace(/\s/gi, "");
  let phraseTwoClear = phraseTwo.replace(/\s/gi, "");
  //console.log(phraseOneClear, phraseTwoClear);

  if (phraseOneClear.length !== phraseTwoClear.length) {
    return -1;
  }
  let splited = phraseOneClear.split("");
  let splited2 = phraseTwoClear.split("");
  //console.log(splited, splited2);

  let compteur = 0;

  if (phraseOneClear === phraseTwoClear) {
    return 0;
  }

  for (let [index, value] of splited.entries()) {
    //console.log(value, index);
    //console.log(splited2[index]);
    if (splited[index] !== splited2[index]) {
      compteur++;
      //console.log(compteur);
    }
  }
  return compteur;
}

let resultat = hamming("Jee", "Je e");

console.log(resultat);
