function getAge(death, birth) {
    if (!death) {
        let death = new Date().getFullYear()
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth)

        return oldestAge > currentAge ? oldest : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
