function reverseArray(array) {
    let resultArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

function reverseArrayInPlace(array) {
    for( let i = 0; i < Math.floor(array.length / 2); i++){
        let previousValue = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = previousValue;
    }
    return array;
};

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C"]));
console.log(reverseArray(["A", "B", "C", "D"]));
console.log(reverseArrayInPlace(["A", "B", "C", "D"]));