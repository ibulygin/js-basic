function compare(array) {
    return array.reduce((arr1, arr2) => arr1.concat(arr2) );
};

console.log(compare([[1, 2, 3], [4, 5], [6]]));