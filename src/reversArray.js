function reverseArray(array) {
    resultArray = [];

    for( let i = 0; i < array.length; i++){
        resultArray.push(array[array.length - 1 - i]);
    }
    return resultArray;
}

function reverseArrayInPlace() {
    
}
console.log(reverseArray(["A", "B", "C"]));