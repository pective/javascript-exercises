
const palindromes = function ( str ) {
    let cleanStr = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    cleanStr = cleanStr.replace(/\s+/g, '');
    let lowStr = cleanStr.toLowerCase();
    
    let revStr = lowStr.split('').reverse().join('')

    // console.log(str);
    // console.log(revStr);

    if ( revStr === lowStr) {
        return true;
    } else return false;
};


// Do not edit below this line
module.exports = palindromes;
