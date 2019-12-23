function some(array, func) {
    for (let item of array){
        if (func(item)) return true;
    }
    return false;
};

console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
