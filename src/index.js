const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const letterLength = 10;
  let exprArray = [];

  const space = '**********';
  const codes = {
    '10': '.',
    '11': '-',
    space : ' ',
  };

  function decodeLetter(letter) {
    if (letter === space) {
      return codes.space;
    }

    let trimmedLetter = String((Number(letter)));
    let morseString = '';

    for (let i = 0; i < trimmedLetter.length - 1; i += 2) {
      morseString += codes[trimmedLetter.substring(i, i + 2)];
    }

    return MORSE_TABLE[morseString];
  }

  for (let i = 0; i <= expr.length - letterLength; i += letterLength) { 
    let decodedLetter = decodeLetter(expr.substring(i, i + letterLength));
    exprArray.push(decodedLetter);
  }

  return exprArray.join('');

}

module.exports = {
    decode
}