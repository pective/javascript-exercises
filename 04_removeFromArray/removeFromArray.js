const removeFromArray = function(array, ...args) {
    let newArray = [];

    for (const item of array) {
        if (args.includes(item)) {
            continue;
        } else {
            newArray.push(item);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
