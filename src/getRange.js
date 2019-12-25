function getRange(rangeStart, rangeEnd, step) {
    let array = [];

    if ((rangeStart < rangeEnd) && (step > 0)) {
        for (let i = rangeStart; i <= rangeEnd; i += step) {
            array.push(i);
        }
    };

    if ((rangeStart > rangeEnd) && (step < 0)) {
        for (let i = rangeStart; i >= rangeEnd; i += step) {
            array.push(i);
        }
    };

    return array;
};

function sum(array) {
    return array.reduce((presentValue, nextValue) => presentValue + nextValue);
};

console.log(getRange(5, 2, -1));
// → [5, 4, 3, 2]
console.log(getRange(1, 10, 2));
//[1, 3, 5, 7, 9]
console.log(getRange(5, 2, -1));
// [5, 4, 3, 2].
console.log(getRange(5, 2, 1));
// 