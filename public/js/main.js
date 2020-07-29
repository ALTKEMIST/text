$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

function sentenceCase(input, lowercaseBefore) {
  input = ( input === undefined || input === null ) ? '' : input;
  if (lowercaseBefore) { input = input.toLowerCase(); }
  return input.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
      return separator + char.toUpperCase();
  });
}

function toMayus(){
  var txt = texto.value;
  texto.value = txt.toUpperCase();
}

function toMins(){
  var txt = texto.value;
  texto.value = txt.toLowerCase();
}

function toCapt(){
  var txt = texto.value;
  texto.value = capitalize(txt);
}

function toSent(){
  var txt = texto.value;
  texto.value = sentenceCase(txt.toLowerCase());
}