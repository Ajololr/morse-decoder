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
    let result = '';
    for (let i = 0; i < expr.length / 10; i++) {
        let tempStr = expr.substr(i * 10, 10);
        if (tempStr === '**********') result += ' '
            else {
                let cipherKey = '';
                for (let j = tempStr.indexOf('1'); j < 9; j += 2){
                    if (tempStr.substr(j, 2) === '11') {
                        cipherKey += '-';
                    }
                    else cipherKey += '.';
                };
                result += MORSE_TABLE[cipherKey];
            };
    }
    return result;
}

module.exports = {
    decode
}