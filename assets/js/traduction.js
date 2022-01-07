//JS traduction
"use strict";


function traductionInput(valore) {
  if(valore == 'mela' || valore == 'mele' || valore == 'Mela' || valore == 'Mele' || valore == 'MELA' || valore == 'MELE') {
    return 'Apple';
  } else if(valore == 'pesca' || valore == 'pesche' || valore == 'Pesca' || valore == 'Pesche' || valore == 'PESCA' || valore == 'PESCHE') {
    return 'Apricot';
  } else if(valore == 'mora' || valore == 'more' || valore == 'Mora' || valore == 'More' || valore == 'MORA' || valore == 'MORE') {
    return 'Blackberry';
  } else if(valore == 'mirtillo' || valore == 'mirtilli' || valore == 'Mirtillo' || valore == 'Mirtilli' || valore == 'MIRTILLO' || valore == 'MIRTILLI') {
    return 'Blueberry';
  } else if(valore == 'ciliegia' || valore == 'ciliege' || valore == 'Ciliegia' || valore == 'Ciliege' || valore == 'CILIEGIA' || valore == 'CILIEGE') {
    return 'Cherry';
  } else if(valore == 'fico' || valore == 'fichi' || valore == 'Fico' || valore == 'Fichi' || valore == 'FICO' || valore == 'FICHI') {
    return 'Fig';
  } else if(valore == 'uva spina' || valore == 'Uva Spina' || valore == 'Uva spina' || valore == 'UVA SPINA' || valore == 'UVASPINA' || valore == 'uvaspina') {
    return 'Gooseberry';
  } else if(valore == 'Uva' || valore == 'uva' || valore == 'UVA') {
    return 'Grapes';
  } else if(valore == 'Guaiava' || valore == 'guaiava' || valore == 'GUAIAVA') {
    return 'Guava';
  } else if(valore == 'limone' || valore == 'limoni' || valore == 'Limone' || valore == 'Limoni' || valore == 'LIMONE' || valore == 'LIMONI') {
    return 'Lemon';
  } else if(valore == 'mirtillo rosso' || valore == 'mirtilli rossi' || valore == 'Mirtillo rosso' || valore == 'Mirtilli rossi' || valore == 'MIRTILLO ROSSO' || valore == 'MIRTILLI ROSSI') {
    return 'Lingonberry';
  } else if(valore == 'litchi' || valore == 'Litchi' || valore == 'LITCHI') {
    return 'Lychee';
  } else if(valore == 'melone' || valore == 'meloni' || valore == 'Melone' || valore == 'Meloni' || valore == 'MELONE' || valore == 'MELONI') {
    return 'Melon';
  } else if(valore == 'arancia' || valore == 'arance' || valore == 'Arancia' || valore == 'Arance' || valore == 'ARANCIA' || valore == 'ARANCE') {
    return 'Orange';
  } else if(valore == 'papaia' || valore == 'PAPAIA' || valore == 'Papaia') {
    return 'Papaya';
  } else if(valore == 'pera' || valore == 'pere' || valore == 'Pera' || valore == 'Pere' || valore == 'PERA' || valore == 'PERE') {
    return 'Pear';
  } else if(valore == 'caco' || valore == 'cachi' || valore == 'Caco' || valore == 'Cachi' || valore == 'CACO' || valore == 'CACHI') {
    return 'Persimmon';
  } else if(valore == 'Ananas' || valore == 'ananas' || valore == 'ANANAS') {
    return 'Pineapple';
  } else if(valore == 'lampone' || valore == 'lamponi' || valore == 'Lampone' || valore == 'Lamponi' || valore == 'LAMPONE' || valore == 'LAMPONI') {
    return 'Raspberry';
  } else if(valore == 'fragola' || valore == 'fragole' || valore == 'Fragola' || valore == 'Fragole' || valore == 'FRAGOLA' || valore == 'FRAGOLE') {
    return 'Strawberry';
  } else if(valore == 'pomodoro' || valore == 'pomodori' || valore == 'Pomodoro' || valore == 'Pomodori' || valore == 'POMODORO' || valore == 'POMODORI') {
    return 'Tomato';
  } else if(valore == 'anguria' || valore == 'angurie' || valore == 'Anguria' || valore == 'Angurie' || valore == 'ANGURIA' || valore == 'ANGURIE') {
    return 'Watermelon';
  } else if(valore == 'BANANE' || valore == 'Banane' || valore == 'banane') {
    return 'Banana';
  } else {
    return valore;
  }
}

function traductionPrint(valore) {
  if(valore == 'Apple') {
    return 'Mela';
  } else if (valore == 'Apricot') {
    return 'Pesca';
  } else if (valore == 'Banana') {
    return 'Banana';
  } else if (valore == 'Blackberry') {
    return 'Mora';
  } else if (valore == 'Blueberry') {
    return 'Mirtillo';
  } else if (valore == 'Cherry') {
    return 'Ciliegia';
  } else if (valore == 'Durian') {
    return 'Durian';
  } else if (valore == 'Fig') {
    return 'Fico';
  } else if (valore == 'Gooseberry') {
    return 'Uva spina';
  } else if (valore == 'Grapes') {
    return 'Uva';
  } else if (valore == 'Guava') {
    return 'Guaiava';
  } else if (valore == 'Kiwi') {
    return 'Kiwi';
  } else if (valore == 'Lemon') {
    return 'Limone';
  } else if (valore == 'Lime') {
    return 'Lime';
  } else if (valore == 'Lingonberry') {
    return 'Mirtillo rosso';
  } else if (valore == 'Lychee') {
    return 'Litchi';
  } else if (valore == 'Mango') {
    return 'Mango';
  } else if (valore == 'Melon') {
    return 'Melone';
  } else if (valore == 'Orange') {
    return 'Arancia';
  } else if (valore == 'Papaya') {
    return 'Papaia';
  } else if (valore == 'Pear') {
    return 'Pera';
  } else if (valore == 'Persimmon') {
    return 'Caco';
  } else if (valore == 'Pineapple') {
    return 'Ananas';
  } else if (valore == 'Raspberry') {
    return 'Lampone';
  } else if (valore == 'Strawberry') {
    return 'Fragola';
  } else if (valore == 'Tomato') {
    return 'Pomodoro';
  } else if (valore == 'Watermelon') {
    return 'Anguria';
  } else {
    return valore;
  }
}
