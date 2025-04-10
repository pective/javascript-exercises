
const palindromes = function ( str ) {
    let cleanStr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
    
    let revStr = cleanStr.split('').reverse().join('')

    if ( revStr === cleanStr) {
        return true;
    } else return false;
};


// Do not edit below this line
module.exports = palindromes;
