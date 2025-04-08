const repeatString = function(str, num) {
    if(num<0) return "ERROR";
    let str2 = '';
    for( let i = 0; i < num; i++) {
        str2 += str;
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
