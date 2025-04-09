const sumAll = function( n1, n2 ) {
    let sum = 0;

    // Check if inputs are negative or decimal numbers
    if (n1 < 0 || n2 < 0 || n1 !== Math.floor(n1) || n2 !== Math.floor(n2)) {
        return 'ERROR';
    }

    if ( n1 < n2) {
        for (; n1 <= n2; n1++) {
            sum += n1;
        }
    } else {
        for (; n2 <= n1; n2++) {
            sum += n2;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
