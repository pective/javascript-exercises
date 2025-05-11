const getTheTitles = function(arr) {
    let titles = [];
    arr.forEach((item, index) => {
        titles.push(item.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
