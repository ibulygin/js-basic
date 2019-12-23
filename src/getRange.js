function getRange(rangeStart, rangeEnd, step) {
    let stepSign = rangeEnd - rangeStart;
    let resultArray = [];

    if (stepSign > 0) {
        for (let i = rangeStart; i <= rangeEnd; i += step) {
            resultArray.push(i);
        }
    } else {
        for (let i = rangeStart; i >= rangeEnd; i += step) {
            resultArray.push(i);
        }
    }
    return resultArray;
};

function sum(array) {
    return array.reduce((presentValue, nextValue) => presentValue + nextValue);
}

console.log(sum(getRange(5, 2, -1)));