// Grab DOM Elements
const container = document.querySelector('.container');
const heading = document.querySelector('h1');
const brailleDisplay = document.querySelector('h2');

// Define the Braille encoding table
const brailleTable = {
    'a': '⠁',
    'b': '⠃',
    'c': '⠉',
    'd': '⠙',
    'e': '⠑',
    'f': '⠋',
    'g': '⠛',
    'h': '⠓',
    'i': '⠊',
    'j': '⠚',
    'k': '⠅',
    'l': '⠇',
    'm': '⠍',
    'n': '⠝',
    'o': '⠕',
    'p': '⠏',
    'q': '⠟',
    'r': '⠗',
    's': '⠎',
    't': '⠞',
    'u': '⠥',
    'v': '⠧',
    'w': '⠺',
    'x': '⠭',
    'y': '⠽',
    'z': '⠵',
    '1': '⠂',
    '2': '⠆',
    '3': '⠒',
    '4': '⠲',
    '5': '⠢',
    '6': '⠖',
    '7': '⠶',
    '8': '⠦',
    '9': '⠔',
    '0': '⠴',
    ' ': ' ',
    '.': '⠲',
    ',': '⠂',
    ';': '⠆⠂',
    ':': '⠒⠲',
    '?': '⠢⠦',
    '!': '⠖⠦',
    '-': '⠤',
    '(': '⠐⠣',
    ')': '⠐⠜',
    '/': '⠌',
    '@': '⠈⠁',
    '&': '⠈⠯',
    '\'': '⠄',
    '"': '⠐⠄',
    '$': '⠈⠎',
    '%': '⠘⠴'
}

function check_text(text) {
    let output = [];
    for (let i = 0; i < text.length; i++) {
        let input = text[i];
        let char = input.toLowerCase()  ;
        output.push(brailleTable[char]);
    }
    let output_string = output.join('');
    return output_string;
}

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.querySelector('#user-input').value;

    console.log('form clicked');
    brailleDisplay.innerHTML = check_text(input);
    brailleDisplay.style.fontSize = '5em';
})